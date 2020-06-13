import React, { useState } from 'react'

import classes from './SortInput.module.scss'

export const SortInputComponent = ({ sortProducts, sortBy, sortDir }) => {
  const [sortAscending, setSortAscending] = useState(sortDir)
  const [sortByValue, setSortByValue] = useState(sortBy)

  const applySort = (value, ascending) => {
    setSortAscending(ascending)
    setSortByValue(value)
    sortProducts(value, ascending)
  }

  return (
    <div className={classes.SortInput}>
      <label htmlFor='ascending'>По возростанию</label>
      <input
        type='radio'
        id='ascending'
        checked={sortAscending}
        onChange={({ target }) => applySort(sortByValue, true)}
      />

      <label htmlFor='descending'>По убыванию</label>
      <input
        type='radio'
        id='descending'
        checked={!sortAscending}
        onChange={({ target }) => applySort(sortByValue, false)}
      />
      <select
        onChange={({ target }) => applySort(target.value, sortAscending)}
        value={sortBy}>
        <option value={'name'}>Сортировка за названием</option>
        <option value={'rating'}>Сортировка за рейтингом</option>
        <option value={'price'}>Сортировка за ценой</option>
      </select>
    </div>
  )
}
