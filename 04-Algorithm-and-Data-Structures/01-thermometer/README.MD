## Thermometer

```pseudocode
START

STORE "fahrenheit" without any value
STORE "kelvin" without any value
STORE "celcius" without any value
STORE "result" without any value
STORE "N" with any value

IF "fahrenheit"
    DO CALCULATE ((N - 32) * (5/9))
    SET "result" value with calculation result
    DISPLAY "result"

ELSE IF "kelvin"
    DO CALCULATE (N - 273.15)
    SET "result" value with calculation result
    DISPLAY "result"

ELSE IF "celcius"
    DO CALCULATE 
    SET "result" value with calculation result
    DISPLAY "result"

ELSE
    DISPLAY "Invalid Input"

STOP
```