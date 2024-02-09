import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

const valueInit = {
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "root",
    version: 1,
  },
};

const FreeTextInputStatic = ({
  value,
  className,
}: {
  value?: string | null;
  className?: string;
}) => {
  const initialConfig = {
    namespace: "Free text editor",
    editorState: value || JSON.stringify(valueInit),
    onError: (error: Error) => {
      throw error;
    },
    editable: false,
  };

  return (
    <div className={`relative gap-y-2 flex flex-col ${className}`}>
      <LexicalComposer initialConfig={initialConfig}>
        <PlainTextPlugin
          contentEditable={
            <ContentEditable className="focus-visible:outline-none" />
          }
          placeholder={
            <div className="absolute top-0 left-0 pointer-events-none"></div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
      </LexicalComposer>
    </div>
  );
};

export default FreeTextInputStatic;
