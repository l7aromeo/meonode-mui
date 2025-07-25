import React from 'react'
import { GridColumnHeaderSeparatorProps } from '@mui/x-data-grid-premium'
import { GridStateColDef, PinnedColumnPosition } from '@mui/x-data-grid/internals'
import { SxProps, Theme } from '@mui/system'
import { GridRenderCellParams, GridSortDirection } from '@mui/x-data-grid-premium'

export interface GridColumnHeaderItemProps {
  colIndex: number
  colDef: GridStateColDef
  columnMenuOpen: boolean
  headerHeight: number
  isDragging: boolean
  isResizing: boolean
  isLast: boolean
  sortDirection: GridSortDirection
  sortIndex?: number
  filterItemsCounter?: number
  hasFocus?: boolean
  tabIndex: 0 | -1
  disableReorder?: boolean
  separatorSide?: GridColumnHeaderSeparatorProps['side']
  pinnedPosition?: PinnedColumnPosition
  pinnedOffset?: number
  style?: React.CSSProperties
  isLastUnpinned: boolean
  isSiblingFocused: boolean
  showLeftBorder: boolean
  showRightBorder: boolean
}

export interface GridBooleanCellProps extends GridRenderCellParams {
  hideDescendantCount?: boolean
}

export interface SelectedRowCountProps {
  selectedRowCount: number
}

export type GridSelectedRowCountProps = React.HTMLAttributes<HTMLDivElement> &
  SelectedRowCountProps & {
    sx?: SxProps<Theme>
  }
