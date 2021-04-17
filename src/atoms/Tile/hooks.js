import { useState } from 'react';

export const useBingoState = (initialChecked = false) => {
    const [checked, setChecked] = useState(initialChecked);

    return { checked, setChecked }
}