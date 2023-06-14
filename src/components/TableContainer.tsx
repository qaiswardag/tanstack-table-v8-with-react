import React, { Fragment, useEffect, useMemo } from 'react';

const TableCell = () => {
  console.log('test for table cell');
};

const TableContainer = ({
  columns,
  data,
  loading,
  initialState,
  setSelectedRows,
  isError,
  children,
}: any) => {
  //
  //
  //
  //
  //
  // React Table 7 - start
  //   const {
  //     getTableProps,
  //     getTableBodyProps,
  //     headerGroups,
  //     page,
  //     prepareRow,
  //     allColumns,
  //     canPreviousPage,
  //     getToggleHideAllColumnsProps,
  //     selectedFlatRows,
  //     canNextPage,
  //     pageOptions,
  //     pageCount,
  //     gotoPage,
  //     nextPage,
  //     previousPage,
  //     setPageSize,
  //     rows,
  //     state: { pageIndex, pageSize },
  //   }: any = useTable(
  //     {
  //       columns,
  //       data,
  //       defaultColumn: { Filter: DefaultColumnFilter },
  //       filterTypes,
  //       initialState: { ...initialState, pageIndex: 0, pageSize: 10 },
  //     },
  //     useFilters,
  //     useGroupBy,
  //     useSortBy,
  //     useExpanded,
  //     usePagination,
  //     useRowSelect,
  //     (hooks) => {
  //       if (setSelectedRows) {
  //         hooks.visibleColumns.push((columnHook) => [
  //           {
  //             id: 'selection',
  //             Header: ({ getToggleAllRowsSelectedProps }: any) => (
  //               <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
  //             ),
  //             Cell: ({ row }: any) => (
  //               <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
  //             ),
  //           },
  //           ...columnHook,
  //         ]);
  //       }
  //     }
  //   );
  // React Table 7 - end

  return (
    <div>
      <p>Test! This is Table Container Component!</p>
    </div>
  );
};

export default TableContainer;
