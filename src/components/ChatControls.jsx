import { useState } from "react";
import { tawkToUtils } from "../utils/tawkto"

const ChatControls = () => {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div>
            Chat Controls
            <button onClick={() => tawkToUtils.show()}>Show</button>
            <button onClick={() => tawkToUtils.hide()}>Hide</button>
            <button onClick={() => tawkToUtils.toggle()}>Toggle</button>
            <button onClick={() => tawkToUtils.maximize()}>Maximize</button>
            <button onClick={() => tawkToUtils.minimize()}>Minimize</button>
            <button onClick={() => setShowOptions(!showOptions)}>Options</button>
            {showOptions && (
                <div>
                    <button onClick={() => tawkToUtils.setAttributes({ name: 'John Doe', email: 'john@example.com' })}>Set Attributes</button>
                    <button onClick={() => tawkToUtils.addTags(['tag1', 'tag2'])}>Add Tags</button>
                    <button onClick={() => tawkToUtils.removeTags(['tag1', 'tag2'])}>Remove Tags</button>
                </div>
            )}
        </div>
    )

}

export default ChatControls;

