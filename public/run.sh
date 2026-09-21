#!/bin/bash
source ~/.bashrc

vlogan -full64 -kdb $2.v $1.v

vcs -full64 -kdb -debug_access+all $2

./simv

verdi -dbdir ./simv.daidir -ssf $1.vcd &

