import React, { useState } from "react";

export default function Clicker() {
    // Используем useState для создания состояния компонента, начальное значение - 0
    const [state, setState] = useState<number>(0);

    // Обработчик клика, увеличивает/уменьшает значение состояния на 1
    // const incrHandler = () => setState(state + 1);
    // const decrHandler = () => {
    //     if (state > 0) {
    //         setState(state - 1);
    //     }
    // };

    const handlerRight = (event: React.MouseEvent): void => {
        event.preventDefault();
        setState(state - 1);
    }
    const handlerLeft = (): void => {
        setState(state + 1);
    }

    return (
        <div>
            <p style={{ margin: '20px', color: 'red' }}>
                {state}
            </p>
            <button onClick={() => setState(state === 0 ? state : state - 1)} style={{ marginRight: '10px' }}>-</button>
            <button onClick={() => setState(state + 1)} style={{ marginRight: '10px' }}>+</button>
            <button onClick={handlerLeft} onContextMenu={handlerRight}>+/-</button>

        </div>
    );
}