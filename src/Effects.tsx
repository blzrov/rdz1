import { useState, useEffect } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    let [value, setValue] = useState(-1);
    function Update(a: any) {
        setValue(a);
    }
    useEffect(() => {
        setValue(-1);
        subscribe(props.sourceId, Update);
        return () => {
            unsubscribe(props.sourceId, Update);
        };
    }, [props.sourceId]);
    return (
        <div>
            {props.sourceId}: {value}
        </div>
    );
}
