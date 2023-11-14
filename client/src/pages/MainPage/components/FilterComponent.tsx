import FilterButton from "./FilterButton";

const FilterComponent = () => {
    return (
        <div className="filter--container">
            <div className="filter__header">
                <h4>Filter options</h4>
                <button className="filter__clr__btn">clear</button>
            </div>
            <FilterButton filter="All" active/>
            <FilterButton filter="Active"/>
            <FilterButton filter="Completed"/>
            <FilterButton filter="Due"/>
        </div>
    )
}

export default FilterComponent;