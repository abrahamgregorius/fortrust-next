"use client";
import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Typography from '@tiptap/extension-typography';
import { Table } from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Placeholder from '@tiptap/extension-placeholder';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import { ImageUploadNode } from '@/components/tiptap-node/image-upload-node';
import { MAX_FILE_SIZE } from '@/lib/tiptap-utils';
import {
  Bold, Italic, Strikethrough, Code, Link2, ImageIcon, Table2,
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Highlighter, List, ListOrdered,
  Heading1, Heading2, Heading3, Heading4,
  Undo, Redo, Minus, Quote, Terminal,
  Columns3, Rows3, XCircle,
} from 'lucide-react';

const ToolbarButton = ({ onClick, active, disabled, children, title }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={`p-1.5 rounded text-sm transition-colors ${
      active ? 'bg-indigo-100 text-indigo-700'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    } ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`}
  >
    {children}
  </button>
);

const LinkInput = ({ onSubmit, onCancel, initialUrl = '' }) => {
  const [url, setUrl] = React.useState(initialUrl);
  return (
    <div className="flex items-center gap-1 px-2 py-1 bg-white border border-gray-300 rounded shadow-sm">
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') { e.preventDefault(); onSubmit(url); }
          if (e.key === 'Escape') onCancel();
        }}
        placeholder="https://example.com"
        autoFocus
        className="flex-1 text-sm border-none focus:outline-none focus:ring-0 py-0.5 px-1"
      />
      <button
        type="button"
        onClick={() => onSubmit(url)}
        className="text-xs px-2 py-0.5 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Apply
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="text-xs px-2 py-0.5 text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>
    </div>
  );
};

const MenuBar = ({ editor, onImageUpload }) => {
  // Hooks must run on every render, so the "no editor yet" guard lives
  // below them, not above.
  const [showLinkInput, setShowLinkInput] = React.useState(false);
  const [linkUrl, setLinkUrl] = React.useState('');

  if (!editor) return null;

  // Inserts a small starter table at the caret.
  const addTable = () => {
    editor
      .chain()
      .focus()
      .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
      .run();
  };

  // Inserts the drag-and-drop upload node. The node renders a dropzone that
  // accepts a dropped file and also opens the file picker when clicked.
  const addImage = () => {
    if (onImageUpload) {
      editor
        .chain()
        .focus()
        .setImageUploadNode({
          accept: 'image/*',
          limit: 3,
          maxSize: MAX_FILE_SIZE,
        })
        .run();
    } else {
      const url = window.prompt('Enter image URL:');
      if (url) editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const setLink = () => {
    if (editor.isActive('link')) {
      editor.chain().focus().unsetLink().run();
    } else {
      const prevUrl = editor.getAttributes('link').href || '';
      setLinkUrl(prevUrl);
      setShowLinkInput(true);
      // Apply link immediately to current selection so user sees it
      editor.chain().focus().setLink({ href: prevUrl || 'https://' }).run();
    }
  };

  const applyLink = (url) => {
    const trimmed = url.trim();
    if (!trimmed) {
      editor.chain().focus().unsetLink().run();
    } else {
      editor.chain().focus().setLink({ href: trimmed }).run();
    }
    setShowLinkInput(false);
    setLinkUrl('');
  };

  const cancelLink = () => {
    editor.chain().focus().unsetLink().run();
    setShowLinkInput(false);
    setLinkUrl('');
  };

  return (
    <div className="flex flex-wrap items-center gap-0.5 border-b border-gray-200 bg-gray-50 px-2 py-1.5 rounded-t-lg">
      {/* Text formatting */}
      <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} title="Bold">
        <Bold className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} title="Italic">
        <Italic className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive('strike')} title="Strikethrough">
        <Strikethrough className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleCode().run()} active={editor.isActive('code')} title="Inline Code">
        <Code className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleHighlight().run()} active={editor.isActive('highlight')} title="Highlight">
        <Highlighter className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleSubscript().run()} active={editor.isActive('subscript')} title="Subscript">
        <span className="text-xs font-serif">X<sub>2</sub></span>
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleSuperscript().run()} active={editor.isActive('superscript')} title="Superscript">
        <span className="text-xs font-serif">X<sup>2</sup></span>
      </ToolbarButton>

      <div className="w-px h-5 bg-gray-300 mx-1" />

      {/* Link & Image */}
      {showLinkInput ? (
        <LinkInput onSubmit={applyLink} onCancel={cancelLink} initialUrl={linkUrl} />
      ) : (
        <ToolbarButton onClick={setLink} active={editor.isActive('link')} title="Link">
          <Link2 className="w-4 h-4" />
        </ToolbarButton>
      )}
      <ToolbarButton onClick={addImage} title={onImageUpload ? "Upload Image (click to browse, or drag a file onto the editor)" : "Insert Image"}>
        <ImageIcon className="w-4 h-4" />
      </ToolbarButton>

      <div className="w-px h-5 bg-gray-300 mx-1" />

      {/* Headings */}
      <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} active={editor.isActive('heading', { level: 1 })} title="Heading 1">
        <Heading1 className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })} title="Heading 2">
        <Heading2 className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })} title="Heading 3">
        <Heading3 className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} active={editor.isActive('heading', { level: 4 })} title="Heading 4">
        <Heading4 className="w-4 h-4" />
      </ToolbarButton>

      <div className="w-px h-5 bg-gray-300 mx-1" />

      {/* Lists */}
      <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')} title="Bullet List">
        <List className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')} title="Numbered List">
        <ListOrdered className="w-4 h-4" />
      </ToolbarButton>
      <div className="w-px h-5 bg-gray-300 mx-1" />

      {/* Alignment */}
      <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('left').run()} active={editor.isActive({ textAlign: 'left' })} title="Align Left">
        <AlignLeft className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('center').run()} active={editor.isActive({ textAlign: 'center' })} title="Align Center">
        <AlignCenter className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('right').run()} active={editor.isActive({ textAlign: 'right' })} title="Align Right">
        <AlignRight className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('justify').run()} active={editor.isActive({ textAlign: 'justify' })} title="Justify">
        <AlignJustify className="w-4 h-4" />
      </ToolbarButton>

      <div className="w-px h-5 bg-gray-300 mx-1" />

      {/* Blocks */}
      <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')} title="Quote">
        <Quote className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleCodeBlock().run()} active={editor.isActive('codeBlock')} title="Code Block">
        <Terminal className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Horizontal Rule">
        <Minus className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton onClick={addTable} title="Insert Table">
        <Table2 className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().addColumnAfter().run()}
        disabled={!editor?.isActive('table')}
        title="Add Column After"
      >
        <Columns3 className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().deleteColumn().run()}
        disabled={!editor?.isActive('table')}
        title="Delete Column"
      >
        <XCircle className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().addRowAfter().run()}
        disabled={!editor?.isActive('table')}
        title="Add Row Below"
      >
        <Rows3 className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().deleteRow().run()}
        disabled={!editor?.isActive('table')}
        title="Delete Row"
      >
        <XCircle className="w-4 h-4" />
      </ToolbarButton>

      <div className="w-px h-5 bg-gray-300 mx-1" />

      {/* Undo/Redo */}
      <ToolbarButton onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().chain().focus().undo().run()} title="Undo">
        <Undo className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().chain().focus().redo().run()} title="Redo">
        <Redo className="w-4 h-4" />
      </ToolbarButton>
    </div>
  );
};

// A drag that carries files, as opposed to moving text inside the editor.
const carriesFiles = (event) =>
  Array.from(event.dataTransfer?.types || []).includes('Files');

const RichTextEditor = ({ content, onChange, placeholder = 'Start writing...', onImageUpload }) => {
  // The uploader is passed in as a prop and is a new function on every render,
  // so it is kept in a ref. The editor extension reads it at upload time and
  // therefore never has to be rebuilt.
  const uploaderRef = React.useRef(onImageUpload);
  React.useEffect(() => {
    uploaderRef.current = onImageUpload;
  }, [onImageUpload]);

  const [uploadError, setUploadError] = React.useState('');
  const [isDragOver, setIsDragOver] = React.useState(false);
  // dragenter/dragleave fire for every child element, so the depth is counted
  // to know when the pointer actually left the editor.
  const dragDepth = React.useRef(0);

  // Signature expected by the image upload node: (file, onProgress, signal).
  const upload = React.useCallback(async (file, onProgress, signal) => {
    const uploader = uploaderRef.current;
    if (!uploader) throw new Error('Image upload is not available.');
    if (signal?.aborted) throw new Error('Upload cancelled.');
    if (file.size > MAX_FILE_SIZE) {
      throw new Error(`File is larger than ${MAX_FILE_SIZE / 1024 / 1024}MB.`);
    }
    onProgress?.({ progress: 40 });
    const url = await uploader(file);
    if (signal?.aborted) throw new Error('Upload cancelled.');
    onProgress?.({ progress: 100 });
    return url;
  }, []);

  const extensions = React.useMemo(() => [
    // `link: false` — StarterKit v3 ships its own Link extension; it must be
    // disabled here or the configured Link below would register twice
    // ("Duplicate extension names found: ['link']").
    StarterKit.configure({
      heading: { levels: [1, 2, 3, 4] },
      link: false,
    }),
    Image.configure({ inline: false, allowBase64: true }),
    Link.configure({ openOnClick: false, HTMLAttributes: { class: 'text-indigo-600 underline hover:text-indigo-800' } }),
    Highlight.configure({ multicolor: false }),
    TextAlign.configure({ types: ['heading', 'paragraph'] }),
    Typography,
    Subscript,
    Superscript,
    Table.configure({ resizable: true }),
    TableRow,
    TableCell,
    TableHeader,
    Placeholder.configure({ placeholder }),
    ImageUploadNode.configure({
      accept: 'image/*',
      maxSize: MAX_FILE_SIZE,
      limit: 3,
      upload,
      onError: (error) => setUploadError(error.message || 'Image upload failed.'),
    }),
  ], [placeholder, upload]);

  const editor = useEditor({
    extensions,
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg max-w-none p-4 min-h-[300px] focus:outline-none editor-content',
      },
    },
  });

  // Sync content prop → editor when data loads after mount
  React.useEffect(() => {
    if (editor && content && content !== editor.getHTML()) {
      editor.commands.setContent(content, false);
    }
  }, [content, editor]);

  const handleDragEnter = (event) => {
    if (!carriesFiles(event)) return;
    event.preventDefault();
    event.stopPropagation();
    dragDepth.current += 1;
    setIsDragOver(true);
  };

  const handleDragOver = (event) => {
    if (!carriesFiles(event)) return;
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';
  };

  const handleDragLeave = (event) => {
    if (!carriesFiles(event)) return;
    event.preventDefault();
    event.stopPropagation();
    dragDepth.current = Math.max(0, dragDepth.current - 1);
    if (dragDepth.current === 0) setIsDragOver(false);
  };

  // Dropping a file straight onto the editor body: upload it and insert the
  // image at the caret. The capture phase is used so ProseMirror's own drop
  // handler does not also try to handle the file.
  const handleDrop = async (event) => {
    if (!carriesFiles(event)) return;
    event.preventDefault();
    event.stopPropagation();
    dragDepth.current = 0;
    setIsDragOver(false);

    const files = Array.from(event.dataTransfer.files || []);
    const images = files.filter((file) => file.type.startsWith('image/'));
    if (!images.length) {
      setUploadError('Only image files can be dropped here.');
      return;
    }
    if (!editor) return;

    setUploadError('');
    const nodes = [];
    for (const file of images) {
      try {
        const url = await upload(file);
        nodes.push({ type: 'image', attrs: { src: url, alt: file.name } });
      } catch (error) {
        setUploadError(error.message || 'Image upload failed.');
      }
    }
    if (nodes.length) {
      const { from } = editor.state.selection;
      editor.chain().focus().insertContentAt(from, nodes).run();
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-1">
      <MenuBar editor={editor} onImageUpload={onImageUpload} />
      <div
        className="relative"
        onDragEnterCapture={handleDragEnter}
        onDragOverCapture={handleDragOver}
        onDragLeaveCapture={handleDragLeave}
        onDropCapture={handleDrop}
      >
        <EditorContent editor={editor} />

        {isDragOver && (
          <div className="absolute inset-0 z-20 flex items-center justify-center rounded-b-lg bg-indigo-50/95 border-2 border-dashed border-indigo-400 pointer-events-none">
            <div className="text-center px-4">
              <ImageIcon className="w-10 h-10 mx-auto text-indigo-500" />
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Drop images here to upload
              </p>
              <p className="text-xs text-indigo-500 mt-0.5">
                PNG, JPG, GIF, WEBP · max {MAX_FILE_SIZE / 1024 / 1024}MB
              </p>
            </div>
          </div>
        )}
      </div>

      {uploadError && (
        <div className="px-4 py-2 bg-red-50 border-t border-red-200 text-sm text-red-700 flex items-center justify-between gap-3">
          <span>{uploadError}</span>
          <button
            type="button"
            onClick={() => setUploadError('')}
            className="text-red-500 hover:text-red-700 font-medium"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default RichTextEditor;
