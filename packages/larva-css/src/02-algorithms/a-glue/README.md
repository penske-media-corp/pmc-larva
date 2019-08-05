# Glue

This is a handy utility for positioning one element over another when no
media queries are necessary (though it could be adapted to use media queries
with @breakpoint suffixes. Read more here: https://notlaura.com/u-glue/

## Usage notes:
1. Apply `a-glue-parent` to the parent element of the glued item.
2. Apply `a-glue` to the item to glue.
3. Apply a modifier of `a-glue--tr-0`, `a-glue--b-100p`, etc. to position the glued item. These modifiers do not need to be in breakpoints, unless the glued item is positioned relatively below the breakpoint (which is not the browser default). They should follow the same naming as u-margin and u-padding classes.

`.a-glue--tr-0` - Glue an item to the top right.
`.a-glue--t-100p` - Glue an item at 100% of it's parent's height.
