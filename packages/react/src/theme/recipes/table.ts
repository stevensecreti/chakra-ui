import { tableAnatomy } from "../../anatomy"
import { defineSlotRecipe } from "../../styled-system"

export const tableSlotRecipe = defineSlotRecipe({
  className: "table",
  slots: tableAnatomy.keys(),
  base: {
    root: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
      textAlign: "start",
      verticalAlign: "top",
      colorPalette: "gray",
    },
    row: {
      _selected: {
        bg: { base: "colorPalette.100", _dark: "colorPalette.400/20" },
      },
    },
    cell: {
      textAlign: "start",
      alignItems: "center",
    },
    columnHeader: {
      fontWeight: "medium",
      textAlign: "start",
      color: "fg",
    },
    caption: {
      fontWeight: "medium",
      fontSize: "xs",
    },
    footer: {
      fontWeight: "medium",
    },
  },

  variants: {
    interactive: {
      true: {
        body: {
          "& tr": {
            _hover: {
              bg: { base: "colorPalette.100", _dark: "colorPalette.700" },
            },
          },
        },
      },
    },

    stickyHeader: {
      true: {
        header: {
          "& :where(tr)": {
            top: "var(--table-sticky-offset, 0)",
            position: "sticky",
            zIndex: 1,
          },
        },
      },
    },

    striped: {
      true: {
        row: {
          "&:nth-of-type(odd) td": {
            bg: "bg.subtle",
          },
        },
      },
    },

    showColumnBorder: {
      true: {
        columnHeader: {
          "&:not(:last-of-type)": {
            borderInlineEndWidth: "1px",
          },
        },
        cell: {
          "&:not(:last-of-type)": {
            borderInlineEndWidth: "1px",
          },
        },
      },
    },

    variant: {
      line: {
        columnHeader: {
          borderBottomWidth: "1px",
        },
        cell: {
          borderBottomWidth: "1px",
        },
        row: {
          bg: "bg",
        },
      },

      outline: {
        root: {
          boxShadow: "0 0 0 1px {colors.border}",
          overflow: "hidden",
        },
        columnHeader: {
          borderBottomWidth: "1px",
        },
        header: {
          bg: "bg.muted",
        },
        row: {
          "&:not(:last-of-type)": {
            borderBottomWidth: "1px",
          },
        },
        footer: {
          borderTopWidth: "1px",
        },
      },
    },

    size: {
      sm: {
        root: {
          fontSize: "sm",
        },
        columnHeader: {
          px: "2",
          py: "2",
        },
        cell: {
          px: "2",
          py: "2",
        },
      },

      md: {
        root: {
          fontSize: "sm",
        },
        columnHeader: {
          px: "3",
          py: "3",
        },
        cell: {
          px: "3",
          py: "3",
        },
      },

      lg: {
        root: {
          fontSize: "md",
        },
        columnHeader: {
          px: "4",
          py: "3",
        },
        cell: {
          px: "4",
          py: "3",
        },
      },
    },
  },

  defaultVariants: {
    variant: "line",
    size: "md",
    colorPalette: "gray",
  },
})
