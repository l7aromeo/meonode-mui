import React from 'react'
import createMuiNode from '@src/core'
import {
  DataGridPremium as MuiDataGridPremium,
  GridApiContext as MuiGridApiContext,
  GridContextProvider as MuiGridContextProvider,
  GridPagination as MuiGridPagination,
  GridAiAssistantPanel as MuiGridAiAssistantPanel,
  GridPanelHeader as MuiGridPanelHeader,
  GridPanelContent as MuiGridPanelContent,
  GridPanelWrapper as MuiGridPanelWrapper,
  GridPanelFooter as MuiGridPanelFooter,
  GridPivotPanel as MuiGridPivotPanel,
  GridEmptyPivotOverlay as MuiGridEmptyPivotOverlay,
  GridHeader as MuiGridHeader,
  GridHeaderCheckbox as MuiGridHeaderCheckbox,
  GridHeaderFilterMenu as MuiGridHeaderFilterMenu,
  GridHeaderFilterMenuContainer as MuiGridHeaderFilterMenuContainer,
  GridRow as MuiGridRow,
  GridRowCount as MuiGridRowCount,
  GridNoRowsOverlay as MuiGridNoRowsOverlay,
  GridSelectedRowCount as MuiGridSelectedRowCount,
  GridFooter as MuiGridFooter,
  GridFooterContainer as MuiGridFooterContainer,
  GridFooterPlaceholder as MuiGridFooterPlaceholder,
  GridBody as MuiGridBody,
  GridActionsCell as MuiGridActionsCell,
  GridActionsCellItem as MuiGridActionsCellItem,
  GridBooleanCell as MuiGridBooleanCell,
  GridCell as MuiGridCell,
  GridCellCheckboxForwardRef as MuiGridCellCheckboxForwardRef,
  GridCellCheckboxRenderer as MuiGridCellCheckboxRenderer,
  GridDetailPanelToggleCell as MuiGridDetailPanelToggleCell,
  GridEditBooleanCell as MuiGridEditBooleanCell,
  GridEditDateCell as MuiGridEditDateCell,
  GridEditInputCell as MuiGridEditInputCell,
  GridEditSingleSelectCell as MuiGridEditSingleSelectCell,
  GridHeaderFilterCell as MuiGridHeaderFilterCell,
  GridRowReorderCell as MuiGridRowReorderCell,
  GridSkeletonCell as MuiGridSkeletonCell,
  GridTreeDataGroupingCell as MuiGridTreeDataGroupingCell,
  GridColumnsManagement as MuiGridColumnsManagement,
  GridColumnHeaders as MuiGridColumnHeaders,
  GridColumnsPanel as MuiGridColumnsPanel,
  GridColumnHeaderMenu as MuiGridColumnHeaderMenu,
  GridColumnHeaderItem as MuiGridColumnHeaderItem,
  GridColumnHeaderFilterIconButton as MuiGridColumnHeaderFilterIconButton,
  GridColumnHeaderSeparator as MuiGridColumnHeaderSeparator,
  GridColumnHeaderTitle as MuiGridColumnHeaderTitle,
  GridNoColumnsOverlay as MuiGridNoColumnsOverlay,
  GridExcelExportMenuItem as MuiGridExcelExportMenuItem,
  GridPrintExportMenuItem as MuiGridPrintExportMenuItem,
  GridCsvExportMenuItem as MuiGridCsvExportMenuItem,
  ExportCsv as MuiExportCsv,
  ExportPrint as MuiExportPrint,
  ExportExcel as MuiExportExcel,
  FilterPanelTrigger as MuiFilterPanelTrigger,
  GridArrowUpwardIcon as MuiGridArrowUpwardIcon,
  GridArrowDownwardIcon as MuiGridArrowDownwardIcon,
  GridKeyboardArrowRight as MuiGridKeyboardArrowRight,
  GridExpandMoreIcon as MuiGridExpandMoreIcon,
  GridFilterListIcon as MuiGridFilterListIcon,
  GridFilterAltIcon as MuiGridFilterAltIcon,
  GridSearchIcon as MuiGridSearchIcon,
  GridMenuIcon as MuiGridMenuIcon,
  GridCheckCircleIcon as MuiGridCheckCircleIcon,
  GridColumnIcon as MuiGridColumnIcon,
  GridSeparatorIcon as MuiGridSeparatorIcon,
  GridViewHeadlineIcon as MuiGridViewHeadlineIcon,
  GridTableRowsIcon as MuiGridTableRowsIcon,
  GridViewStreamIcon as MuiGridViewStreamIcon,
  GridTripleDotsVerticalIcon as MuiGridTripleDotsVerticalIcon,
  GridCloseIcon as MuiGridCloseIcon,
  GridAddIcon as MuiGridAddIcon,
  GridRemoveIcon as MuiGridRemoveIcon,
  GridLoadIcon as MuiGridLoadIcon,
  GridDragIcon as MuiGridDragIcon,
  GridCheckIcon as MuiGridCheckIcon,
  GridMoreVertIcon as MuiGridMoreVertIcon,
  GridVisibilityOffIcon as MuiGridVisibilityOffIcon,
  GridViewColumnIcon as MuiGridViewColumnIcon,
  GridClearIcon as MuiGridClearIcon,
  GridDeleteIcon as MuiGridDeleteIcon,
  GridDeleteForeverIcon as MuiGridDeleteForeverIcon,
  GridDownloadIcon as MuiGridDownloadIcon,
  Toolbar as MuiToolbar,
  ToolbarButton as MuiToolbarButton,
  AiAssistantPanelTrigger as MuiAiAssistantPanelTrigger,
  PromptField as MuiPromptField,
  PromptFieldControl as MuiPromptFieldControl,
  PromptFieldSend as MuiPromptFieldSend,
  PromptFieldRecord as MuiPromptFieldRecord,
  QuickFilter as MuiQuickFilter,
  QuickFilterClear as MuiQuickFilterClear,
  QuickFilterControl as MuiQuickFilterControl,
  QuickFilterTrigger as MuiQuickFilterTrigger,
  DataGridPremiumProps,
  GridSkeletonCellProps,
  GridActionsCellItemProps,
  GridColumnHeaderSeparatorProps,
  GridRowCountProps,
} from '@mui/x-data-grid-premium'
import { GridBooleanCellProps, GridColumnHeaderItemProps, GridSelectedRowCountProps } from '@src/lib/mui.x-data-grid-premium.type'

/**
 * Export Material-UI X Data Grid Premium component factories with enhanced type-safety and prop validation.
 * Each export is a factory function that wraps the original MUI component, providing:
 * - Full TypeScript type checking for component props
 * - Direct CSS property support without requiring sx prop
 * - Theme context access and inheritance
 * - Proper component validation and error handling
 */

export const DataGridPremium = createMuiNode<React.ComponentType<DataGridPremiumProps>>(MuiDataGridPremium)
export const GridApiContext = createMuiNode(MuiGridApiContext)
export const GridContextProvider = createMuiNode(MuiGridContextProvider)
export const GridPagination = createMuiNode(MuiGridPagination)
export const GridAiAssistantPanel = createMuiNode(MuiGridAiAssistantPanel)

export const GridPanelHeader = createMuiNode(MuiGridPanelHeader)
export const GridPanelContent = createMuiNode(MuiGridPanelContent)
export const GridPanelWrapper = createMuiNode(MuiGridPanelWrapper)
export const GridPanelFooter = createMuiNode(MuiGridPanelFooter)

export const GridPivotPanel = createMuiNode(MuiGridPivotPanel)
export const GridEmptyPivotOverlay = createMuiNode(MuiGridEmptyPivotOverlay)

export const GridHeader = createMuiNode(MuiGridHeader)
export const GridHeaderCheckbox = createMuiNode(MuiGridHeaderCheckbox)
export const GridHeaderFilterMenu = createMuiNode(MuiGridHeaderFilterMenu)
export const GridHeaderFilterMenuContainer = createMuiNode(MuiGridHeaderFilterMenuContainer)

export const GridRow = createMuiNode(MuiGridRow)
export const GridRowCount = createMuiNode<React.ComponentType<GridRowCountProps>>(MuiGridRowCount)
export const GridNoRowsOverlay = createMuiNode(MuiGridNoRowsOverlay)
export const GridSelectedRowCount = createMuiNode<React.ComponentType<GridSelectedRowCountProps>>(MuiGridSelectedRowCount)

export const GridFooter = createMuiNode(MuiGridFooter)
export const GridFooterContainer = createMuiNode(MuiGridFooterContainer)
export const GridFooterPlaceholder = createMuiNode(MuiGridFooterPlaceholder)
export const GridBody = createMuiNode(MuiGridBody)

export const GridActionsCell = createMuiNode(MuiGridActionsCell)
export const GridActionsCellItem = createMuiNode<React.ComponentType<GridActionsCellItemProps>>(MuiGridActionsCellItem)
export const GridBooleanCell = createMuiNode<React.ComponentType<GridBooleanCellProps>>(MuiGridBooleanCell)
export const GridCell = createMuiNode(MuiGridCell)
export const GridCellCheckboxForwardRef = createMuiNode(MuiGridCellCheckboxForwardRef)
export const GridCellCheckboxRenderer = createMuiNode(MuiGridCellCheckboxRenderer)
export const GridDetailPanelToggleCell = createMuiNode(MuiGridDetailPanelToggleCell)
export const GridEditBooleanCell = createMuiNode(MuiGridEditBooleanCell)
export const GridEditDateCell = createMuiNode(MuiGridEditDateCell)
export const GridEditInputCell = createMuiNode(MuiGridEditInputCell)
export const GridEditSingleSelectCell = createMuiNode(MuiGridEditSingleSelectCell)
export const GridHeaderFilterCell = createMuiNode(MuiGridHeaderFilterCell)
export const GridRowReorderCell = createMuiNode(MuiGridRowReorderCell)
export const GridSkeletonCell = createMuiNode<React.ComponentType<GridSkeletonCellProps>>(MuiGridSkeletonCell)
export const GridTreeDataGroupingCell = createMuiNode(MuiGridTreeDataGroupingCell)

export const GridColumnsManagement = createMuiNode(MuiGridColumnsManagement)
export const GridColumnHeaders = createMuiNode(MuiGridColumnHeaders)
export const GridColumnsPanel = createMuiNode(MuiGridColumnsPanel)
export const GridColumnHeaderMenu = createMuiNode(MuiGridColumnHeaderMenu)
export const GridColumnHeaderItem = createMuiNode<React.ComponentType<GridColumnHeaderItemProps>>(MuiGridColumnHeaderItem)
export const GridColumnHeaderFilterIconButton = createMuiNode(MuiGridColumnHeaderFilterIconButton)
export const GridColumnHeaderSeparator = createMuiNode<React.ComponentType<GridColumnHeaderSeparatorProps>>(MuiGridColumnHeaderSeparator)
export const GridColumnHeaderTitle = createMuiNode(MuiGridColumnHeaderTitle)
export const GridNoColumnsOverlay = createMuiNode(MuiGridNoColumnsOverlay)

export const GridExcelExportMenuItem = createMuiNode(MuiGridExcelExportMenuItem)
export const GridPrintExportMenuItem = createMuiNode(MuiGridPrintExportMenuItem)
export const GridCsvExportMenuItem = createMuiNode(MuiGridCsvExportMenuItem)

export const ExportCsv = createMuiNode(MuiExportCsv)
export const ExportPrint = createMuiNode(MuiExportPrint)
export const ExportExcel = createMuiNode(MuiExportExcel)

export const FilterPanelTrigger = createMuiNode(MuiFilterPanelTrigger)

export const GridArrowUpwardIcon = createMuiNode(MuiGridArrowUpwardIcon)
export const GridArrowDownwardIcon = createMuiNode(MuiGridArrowDownwardIcon)
export const GridKeyboardArrowRight = createMuiNode(MuiGridKeyboardArrowRight)
export const GridExpandMoreIcon = createMuiNode(MuiGridExpandMoreIcon)
export const GridFilterListIcon = createMuiNode(MuiGridFilterListIcon)
export const GridFilterAltIcon = createMuiNode(MuiGridFilterAltIcon)
export const GridSearchIcon = createMuiNode(MuiGridSearchIcon)
export const GridMenuIcon = createMuiNode(MuiGridMenuIcon)
export const GridCheckCircleIcon = createMuiNode(MuiGridCheckCircleIcon)
export const GridColumnIcon = createMuiNode(MuiGridColumnIcon)
export const GridSeparatorIcon = createMuiNode(MuiGridSeparatorIcon)
export const GridViewHeadlineIcon = createMuiNode(MuiGridViewHeadlineIcon)
export const GridTableRowsIcon = createMuiNode(MuiGridTableRowsIcon)
export const GridViewStreamIcon = createMuiNode(MuiGridViewStreamIcon)
export const GridTripleDotsVerticalIcon = createMuiNode(MuiGridTripleDotsVerticalIcon)
export const GridCloseIcon = createMuiNode(MuiGridCloseIcon)
export const GridAddIcon = createMuiNode(MuiGridAddIcon)
export const GridRemoveIcon = createMuiNode(MuiGridRemoveIcon)
export const GridLoadIcon = createMuiNode(MuiGridLoadIcon)
export const GridDragIcon = createMuiNode(MuiGridDragIcon)
export const GridCheckIcon = createMuiNode(MuiGridCheckIcon)
export const GridMoreVertIcon = createMuiNode(MuiGridMoreVertIcon)
export const GridVisibilityOffIcon = createMuiNode(MuiGridVisibilityOffIcon)
export const GridViewColumnIcon = createMuiNode(MuiGridViewColumnIcon)
export const GridClearIcon = createMuiNode(MuiGridClearIcon)
export const GridDeleteIcon = createMuiNode(MuiGridDeleteIcon)
export const GridDeleteForeverIcon = createMuiNode(MuiGridDeleteForeverIcon)
export const GridDownloadIcon = createMuiNode(MuiGridDownloadIcon)

export const Toolbar = createMuiNode(MuiToolbar)
export const ToolbarButton = createMuiNode(MuiToolbarButton)

export const AiAssistantPanelTrigger = createMuiNode(MuiAiAssistantPanelTrigger)

export const PromptField = createMuiNode(MuiPromptField)
export const PromptFieldControl = createMuiNode(MuiPromptFieldControl)
export const PromptFieldRecord = createMuiNode(MuiPromptFieldRecord)
export const PromptFieldSend = createMuiNode(MuiPromptFieldSend)

export const QuickFilter = createMuiNode(MuiQuickFilter)
export const QuickFilterClear = createMuiNode(MuiQuickFilterClear)
export const QuickFilterControl = createMuiNode(MuiQuickFilterControl)
export const QuickFilterTrigger = createMuiNode(MuiQuickFilterTrigger)
