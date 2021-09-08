import React, { useState } from "react";
import classNames from "classnames";
import "./input.scss";

function Input(): JSX.Element {
  const [url, setUrl] = useState("");

  return (
    <div>
      <form className="form-url">
        <label>
          <p>
            Connect to lobby by <span>URL</span>:
          </p>
          <input
            className="form-url__input"
            type="text"
            name="input-url"
            value={url}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUrl(event.target.value);
            }}
          />
        </label>
        <div className="form-url__submit">
          <input type="submit" value="Connect" />
        </div>
      </form>
    </div>
  );
}

export default Input;
