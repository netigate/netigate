function emphasizeHTTP(str) {
    // Emphasize HTTP verbs.
    str = str.replace(/^(GET|POST|PUT|DELETE)(\s.+)$/, "<b>$1</b>$2");

    // Emphasize URL parameters.
    //s = s.replace("&lt;", "&lt;<i>").replace("&gt;", "</i>&gt;");
    str = str.replace(/&lt;([^&]+)&gt;/ig, "&lt;<i>$1</i>&gt;");

    return str;
}

jQuery(function($) {
    $(".ntg-http-request").each(function() {
        $(this).html(emphasizeHTTP($(this).html()));
    });
});
