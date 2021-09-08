import React, { useState } from "react";
import classNames from "classnames";
import "./input.scss";

function Input(): JSX.Element {
  const [url, setUrl] = useState("");

  return (
    <form className="form-url">
      <p className="form-url__text">
        Connect to lobby by <span className="form-url__text_span">URL</span>:
      </p>
      <div className="form-url__div">
        <label>
          <input
            className="form-url__div_input"
            type="text"
            name="input-url"
            value={url}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUrl(event.target.value);
            }}
          />
        </label>
        <input type="submit" value="Connect" className="form-url__div_submit" />
      </div>
    </form>
  );
}

export default Input;
