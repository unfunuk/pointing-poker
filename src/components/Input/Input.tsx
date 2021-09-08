import React, { useState } from "react";
import classNames from "classnames";
import "./input.scss";

function Input(): JSX.Element {
  const [url, setUrl] = useState("");

  return (
    <div>
      <form>
        <label>
          <p>
            Connect to lobby by <span>URL</span>:
          </p>
          <input
            type="text"
            name="input-url"
            value={url}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUrl(event.target.value);
            }}
          />
        </label>
        <div className="submit-url">
          <input type="submit" value="Connect" />
        </div>
      </form>
    </div>
  );
}

export default Input;
