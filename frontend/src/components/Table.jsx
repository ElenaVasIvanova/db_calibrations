import React, {useMemo, useEffect} from 'react';
import { GlobalFilter } from '../components/GlobalFilter'
import { ColumnFilter } from '../components/ColumnFilter'
import { Checkbox } from '../components/Checkbox'
//import BackButton from '../components/BackButton'
import { useTable, useSortBy, useFilters, useGlobalFilter, usePagination, useColumnOrder}  from 'react-table'
const Table = ({columns, data}) => {
  const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnFilter
    }),
    []
    )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    state,
    setPageSize,
    setGlobalFilter,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps
  } = useTable({
    columns,
    data,
    defaultColumn,
   
  },
  useFilters,
  useGlobalFilter, useSortBy, usePagination, useColumnOrder,
  )
  const { globalFilter, pageIndex, pageSize } = state
  return (
    <div>
    <div>
    <div align="left">
    <div 
    >
    <Checkbox {...getToggleHideAllColumnsProps()} /> Покажи/Скрий всички
    </div>
    {allColumns.map(column => (
      <span  key={column.id}>
      <label>
      <input  type='checkbox' {...column.getToggleHiddenProps()} />{' '}
      {column.Header}
      </label>
      {' '}
      </span>
      ))}
    <br />
    </div>
    </div>
    <>
    <select className='pagination'
    value={pageSize}
    onChange={e => setPageSize(Number(e.target.value))}>
    {[10, 25, 50].map(pageSize => (
      <option key={pageSize} value={pageSize}>
      резултати {pageSize}
      </option>
      ))}
    </select>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
    <table {...getTableProps()} >
    <thead >
    {headerGroups.map(headerGroup => (
      <tr {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map(column => (
        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
        <div>
        {column.isSorted
          ? column.isSortedDesc
          ? ' 🔽'
          : ' 🔼'
          : ''}
<br />
          </div>
        {column.render('Header')}
              <tr> 
          <div>{column.canFilter ? column.render('Filter') : null}</div>
          </tr>
          </th>
          ))}
      </tr>

      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
    {page.map(row => {
      prepareRow(row)
      return (
        <tr {...row.getRowProps()}>
        {row.cells.map(cell => {
          return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
        })}
        </tr>
        )
    })}
    </tbody>



    
    <tfoot>
    {footerGroups.map(footerGroup => (
      <tr {...footerGroup.getFooterGroupProps()}>
      {footerGroup.headers.map(column => (
        <td {...column.getFooterProps()}>{column.render('Footer')}</td>
        ))}
      </tr>
      ))}
    </tfoot>
    </table>
    <div>
    <button className='pagination' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
    {'<<'}
    </button>{' '}
    <button className='pagination' onClick={() => previousPage()} disabled={!canPreviousPage}>
    напред
    </button>{' '}
    <button className='pagination' onClick={() => nextPage()} disabled={!canNextPage}>
    назад
    </button>{' '}
    <button className='pagination' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
    {'>>'}
    </button>{' '}
    <span>
    страница{' '}
    <strong>
    {pageIndex + 1} от {pageOptions.length}
    </strong>{' '}
    </span>
    </div>
    </>
  </div>
  )
}
export default Table