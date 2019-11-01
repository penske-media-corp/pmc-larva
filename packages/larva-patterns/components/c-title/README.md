`c-title` should be used for the titles of articles, usually contained within a river or other `section` element. It is an `h3` and supports either `text` or `markup` for its content.

If a value for `c_title_markup` is present, it will display in place of `c_title_text`. This is so that `i` and `em` tags are supported. 

This pattern also supports `c_title_above_url` which is an anchor tag, within the `h3` but with a separate URL, as well as `c_title_before_text` which is a span within the same link as the main `h3`.

In the future, these should/could be refactored into something like `c_title_pre`, and should not have conditionals checking the data.