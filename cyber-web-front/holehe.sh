rootcode="/home/vietvb/Keyce/Code/cyber_web_local2/cyber-web-front"
holehe $1 > "$rootcode/src/assets/data/$2.txt"
grep -n '+' "$rootcode/src/assets/data/$2.txt" > "$rootcode/src/assets/data/$2_$3.txt"
sed -ie '/[-]/ d' "$rootcode/src/assets/data/$2_$3.txt"
