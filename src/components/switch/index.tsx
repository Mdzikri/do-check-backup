import React from "react";
import "./style.scss";

interface SwitchProps {
  id: string;
  leftLabel: string;
  rightLabel: string;
  onChange?: () => void;
  checked?: boolean;
}

const Switch: React.FC<SwitchProps> = ({
  id,
  leftLabel,
  rightLabel,
  onChange,
  checked,
}) => {
  return (
    <div className="flex items-center">
      {leftLabel && (
        <label
          className={`toggle-switch-left-label ${
            checked ? "toggle-switch-inactive" : "toggle-switch-active"
          }`}
          htmlFor={id}
        >
          {" "}
          {leftLabel}
        </label>
      )}
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name="toggleSwitch"
          id={id}
          onChange={onChange}
          checked={checked}
        />
        <label className="toggle-switch-label" htmlFor={id}>
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
      {rightLabel && (
        <label
          className={`toggle-switch-right-label ${
            checked ? "toggle-switch-active" : "toggle-switch-inactive"
          }`}
          htmlFor={id}
        >
          {rightLabel}
        </label>
      )}
    </div>
  );
};

export default Switch;
