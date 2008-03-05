
if ( ! Function.prototype.intervalize ) {
    Function.prototype.intervalize = function(timeout) {
        var items = new Array();
        var method = this;
        var id = setInterval( function() {
            if( items.length > 0 ) {
                var i = items.shift();
                method.apply(window, i);
            }
        }, timeout);
        return function() {
            items.push( arguments )
        }
    };
}

/**

=head1 NAME

Function.intervalize - Turn any funciton into an interval version.

=head1 SYNOPSIS

  function notify(msg) {
      // slide-in a notify box on screen with msg
  }

  // Now it shows at most one notify box in a second.
  notify = notify.intervalize(1000);

  // Or...
  var notify = (function(msg) {
      // slide-in a notify box on screen with msg
  }).intervalize(1000);

=head1 DESCRIPTION

This module provides a C<intervalize> method to the prototype of
C<Function>. When called, returned a new function which does basically
the same thing as the originaly one, but gets called only once in the
specified interval (in ms).

This is useful when you have function to show visual notification on
screen, but sometimes many notifications come up at the same time that
all screen mess up. You can then use it to generate an interval
interval version of your notifier as in the SYNOPSIS.

In general, if one of your function could be called a lot of times in
a short period of time and you want to prevent it from happening, you
should consider using this module.

=head1 AUTHOR

Kang-min Liu <F<gugod@gugod.org>>.
 
=head1 COPYRIGHT

Copyright 2007 by Kang-min Liu <gugod@gugod.org>.

This program is free software; you can redistribute it and/or
modify it under the same terms as Perl itself.

See <http://www.perl.com/perl/misc/Artistic.html>

=cut


*/