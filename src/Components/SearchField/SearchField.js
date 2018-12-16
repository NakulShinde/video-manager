import React from 'react'

import css_styles from './SearchField.module.scss'

const SearchField = (props) => {
    return <div className={css_styles.search__field}>
        <input
            type="text"
            value={props.searchText}
            onChange={props.onInputChange}
            placeholder="Type here to Search by Video Name/Release Date"></input>
    </div>
}
export default SearchField;