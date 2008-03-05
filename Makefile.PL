#!/usr/bin/perl
use strict;
use Module::Build::JSAN;

my $build = Module::Build::JSAN->new(
    module_name    => 'Function-intervalize',
    license        => 'perl',
    dist_author    => 'Kang-min Liu <gugod@gugod.org>',
    dist_abstract  => 'Turn a function into interval version.',
    dist_version   => '0.01',
    keywords       => [qw(function setInterval)],
    requires     => {
        'JSAN'     => 0
    },
);

$build->create_build_script;

