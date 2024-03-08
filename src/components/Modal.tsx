import { createPortal } from "react-dom";

interface Props {
  onSubmit?: () => void;
  onCancel?: () => void;
  children: JSX.Element;
}

export default function Modal({ onSubmit, onCancel, children }: Props) {
  return createPortal(
    <div className="alert-container">
      <div className="alert">
        <div className="alert-header"></div>
        <div className="alert-content">{children}</div>
        <div className="alert-footer">
          <button className="btn" onClick={onSubmit}>
            Yes
          </button>
          <button className="btn" onClick={onCancel}>
            no
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("root") as Element
  );
}
