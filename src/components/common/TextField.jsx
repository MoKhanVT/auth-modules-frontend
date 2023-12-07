import React from "react";

const TextField = ({
  placeholder = "",
  isDisabled = false,
  isReadOnly = false,
  isClearable = false,
  className,
  value,
  onChange,
  classNamePrefix = "",
  name,
  focused = false,
  required,
  icon,
  featureIcon,
  labelTitle,
  onClick,
  onKeyDown,
}) => {
  return (
    <>
      <div id="textfield-wrapper" className={className}>
        <input
          type="text"
          placeholder={placeholder}
          autoComplete="nope"
          value={value}
          disabled={isDisabled || isReadOnly}
          onChange={onChange}
          isClearable={isClearable}
          classNamePrefix={classNamePrefix}
          name={name}
          autoFocus={focused}
          required={required}
          onKeyDown={onKeyDown}
        />
        {icon && <span onClick={onClick}>{icon}</span>}
      </div>
    </>
  );
};

export default TextField;
