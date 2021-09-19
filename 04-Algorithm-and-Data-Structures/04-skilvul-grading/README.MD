## Skilvul Grading
```pseudocode
STORE "nilaiAwal" with any value
STORE "bulatAtas" without any value
STORE "bulatBawah" without any value
STORE "nilaiAkhir" without any value

CALCULATE MATH FLOOR "nilaiAWal" DIVIDE with by 5 then the result TIME by 5
SET "bulatBawah" value with calculation result

CALCULATE MATH CEIL "nilaiAWal" DIVIDE with by 5 then the result TIME by 5
SET "bulatAtas" value with calculation result

IF "nilaiAwal" GREATER than 67 AND "nilaiAwal" GREATER than "bulatBawah" SUM by 2
    SET "nilaiAkhir" with value "bulatAtas"
    DO DISPLAY "nilaiAkhir"

ELSE 
    SET "nilaiAkhir" with value "bulatBawah"
    DO DISPLAY "nilaiAkhir"

```