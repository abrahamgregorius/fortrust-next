"use client";
import React from 'react';

const Icon = ({ path, className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d={path} />
    </svg>
);

const ICONS = {
    upload: "M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z",
    close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",
};

// Shared "Upload Images" block for the blog create/edit forms. The dashed box
// accepts dropped files (the inline version on the edit page only advertised
// drag and drop but never wired up the drag events) and previews both
// existing and newly added images. The parent owns the file state and uploads
// everything when the form is submitted.
const BlogImagesUploader = ({
    existingImages = [],
    onRemoveExisting,
    newImages = [],
    onAddFiles,
    onRemoveNew,
}) => {
    const [isDragOver, setIsDragOver] = React.useState(false);
    const [error, setError] = React.useState('');
    // dragenter/dragleave fire for every child element, so the depth is
    // counted to know when the pointer actually left the box.
    const dragDepth = React.useRef(0);
    const inputId = React.useId();

    const addFiles = (fileList) => {
        const files = Array.from(fileList || []);
        const images = files.filter((file) => file.type.startsWith('image/'));
        if (!images.length) {
            setError('Only image files can be added here.');
            return;
        }
        setError('');
        onAddFiles?.(images);
    };

    const handleDragEnter = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dragDepth.current += 1;
        setIsDragOver(true);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.dropEffect = 'copy';
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dragDepth.current = Math.max(0, dragDepth.current - 1);
        if (dragDepth.current === 0) setIsDragOver(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dragDepth.current = 0;
        setIsDragOver(false);
        addFiles(event.dataTransfer.files);
    };

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Images</label>
            <div
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md transition-colors ${
                    isDragOver ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
                }`}
            >
                {isDragOver ? (
                    <div className="space-y-1 text-center">
                        <Icon path={ICONS.upload} className="mx-auto h-12 w-12 text-indigo-500" />
                        <p className="text-sm font-semibold text-indigo-700">Drop images here to add them</p>
                    </div>
                ) : (
                    <div className="space-y-1 text-center">
                        <Icon path={ICONS.upload} className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex justify-center items-center text-sm text-gray-600">
                            <label
                                htmlFor={inputId}
                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                <span>Upload files</span>
                                <input
                                    id={inputId}
                                    name="file-upload"
                                    type="file"
                                    multiple
                                    onChange={(e) => {
                                        addFiles(e.target.files);
                                        // Reset so selecting the same file again still fires.
                                        e.target.value = '';
                                    }}
                                    className="sr-only"
                                    accept="image/*"
                                />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                )}
            </div>

            {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
            )}

            {/* EXISTING IMAGES */}
            {existingImages.length > 0 && (
                <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Existing Images</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {existingImages.map((imageUrl, index) => (
                            <div key={`existing-${index}`} className="relative group">
                                <img src={imageUrl} alt={`existing ${index}`} className="h-24 w-full object-cover rounded-md" />
                                {onRemoveExisting && (
                                    <button
                                        type="button"
                                        onClick={() => onRemoveExisting(index)}
                                        className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Icon path={ICONS.close} className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* NEW IMAGES */}
            {newImages.length > 0 && (
                <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">New Images</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {newImages.map((file, index) => (
                            <div key={`new-${index}`} className="relative group">
                                <img src={URL.createObjectURL(file)} alt={`preview ${index}`} className="h-24 w-full object-cover rounded-md" />
                                {onRemoveNew && (
                                    <button
                                        type="button"
                                        onClick={() => onRemoveNew(index)}
                                        className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Icon path={ICONS.close} className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogImagesUploader;
