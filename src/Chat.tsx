import { DraggableResizableBox } from "./ChatBox"

export const Chat = () => {
    return (
        <DraggableResizableBox>
            <div style={{ width: "100%", height: "100%", display: "flex", }}>
                <div>
                    element 1
                </div>
                <div>
                    element 2
                </div>
            </div>
        </DraggableResizableBox>
    )
}