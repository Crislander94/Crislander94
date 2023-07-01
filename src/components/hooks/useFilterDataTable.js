import { useMemo, useState } from "react";
import Filtercomponent from "../common/Filtercomponent";


export const useFIlterDataTable = () => {
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);


    const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<Filtercomponent
                onFilter={e => setFilterText(e.target.value)} 
                onClear={handleClear}
                filterText={filterText} 
            />
		);
	}, [filterText, resetPaginationToggle]);


    return {
        filterText,
        resetPaginationToggle,
        subHeaderComponentMemo
    }
}