## Thermometer

```pseudocode
START

STORE "result" without any value
STORE "N" with any value
STORE "type_temperature" with any value

IF "type_temperature" is fahrenheit
    DO CALCULATE ((N - 32) * (5/9))
    SET "result" value with calculation result
    DISPLAY "result"

ELSE IF "type_temperature" is kelvin
    DO CALCULATE (N - 273.15)
    SET "result" value with calculation result
    DISPLAY "result"

ELSE IF "type_temperature" is kelvin
    DO CALCULATE 
    SET "result" value with calculation result
    DISPLAY "result"

ELSE
    DISPLAY "Invalid Input"
    
STOP
```
