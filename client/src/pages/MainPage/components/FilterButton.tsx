

type FilterButtonProps = {
    filter: string;
    active?: boolean;
}

const FilterButton = (props:FilterButtonProps) => {
    const {filter, active} = props;
    return (
        <button className={`filter__btn ${active ? "btn__active":""}`}>{filter}</button>
    )
}

export default FilterButton;