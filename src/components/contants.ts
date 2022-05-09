import * as vscode from 'vscode';

export const SELECTOR = { language: 'gsql', scheme: 'file' }; // register for all Java documents from the local file system
export const KEYWORD = [
  'ABORT', 'ACCUM', 'AND', 'ANY', 'API', 'AS', 'ASC', 'AVG',
  'BAG', 'BATCH', 'BETWEEN', 'BOOL', 'BOTH', 'BREAK', 'BY',
  'CASE', 'CATCH', 'COALESCE', 'COMMIT', 'COMPRESS', 'CONTINUE', 'COUNT', 'CREATE',
  'DATETIME', 'DATETIME_ADD', 'DATETIME_SUB', 'DELETE', 'DESC', 'DISTINCT', 'DISTRIBUTED', 'DO', 'DOUBLE',
  'EDGE', 'ELSE', 'END', 'ESCAPE', 'EXCEPTION',
  'FALSE', 'FILE', 'FILTER', 'FLOAT', 'FOR', 'FOREACH', 'FROM',
  'GRAPH', 'GROUP',
  'HAVING',
  'IF', 'IN', 'INSERT', 'INT', 'INTERPRET', 'INTERSECT', 'INTERVAL', 'INTO', 'IS', 'ISEMPTY',
  'JSONARRAY', 'JSONOBJECT',
  'LASTHOP', 'LEADING', 'LIKE', 'LIMIT', 'LIST', 'LOAD_ACCUM', 'LOG',
  'MAP', 'MATCH', 'MAX', 'MIN', 'MINUS',
  'NOT', 'NOW', 'NULL',
  'OFFSET', 'OR', 'ORDER',
  'PATH', 'PER', 'PINNED', 'POST_ACCUM', 'POST-ACCUM', 'PRIMARY_ID', 'PRINT',
  'QUERY',
  'RAISE', 'RANGE', 'REPLACE', 'RETURN', 'RETURNS', 'RUN',
  'SAMPLE', 'SELECT', 'SELECT_VERTEX', 'SET', 'SRC', 'STATIC', 'STRING', 'SUM', 'SYNTAX',
  'TARGET', 'TAGS', 'TGT', 'THEN', 'TO', 'TO_CSV', 'TO_DATETIME', 'TRAILING', 'TRIM', 'TRUE', 'TRY', 'TUPLE', 'TYPEDEF',
  'UINT', 'UNION', 'UPDATE',
  'VALUES', 'VERTEX',
  'WHEN', 'WHERE', 'WHILE', 'WITH',

  'GSQL_INT_MAX', 'GSQL_INT_MIN', 'GSQL_UINT_MAX',
  'RESET_COLLECTION_ACCUM',
];
export const FUNCTIONS: vscode.CompletionItem[] = [
  {
    label: 'avg()',
    detail: 'avg( [DISTINCT] setExp )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the average of all elements in a set or bag. The function can only take set/bag expressions whose members are numeric types.

      - Return type
        A numeric type. If all members of the set/bag expression are integers, the return value will also be rounded down to be an integer.

      - Parameters
        Parameter: setExp
        Description: An expression that evaluates to a SET, BAG, SetAccum or BagAccum
        Data type: SET, BAG, SetAccum, BagAccum

      - Example
        avg([5, 4, 1, 0, 0, 0]) -> 1
        avg([3, 2, 1]) -> 2
      `
    )
  },
  {
    label: 'count()',
    detail: 'count( [DISTINCT] setExp )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the size of the set or bag.

      - Return type
        INT

      - Parameters
        Parameter: setExp
        Description: An expression that evaluates to a SET, BAG, SetAccum or BagAccum
        Data type: SET, BAG, SetAccum, BagAccum

      - Example
        count([1, 2, 3]) => 3
        count([1, 1, 2, 2) => 4
      `
    )
  },
  {
    label: 'max()',
    detail: 'max( [DISTINCT] setExp )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the member with the maximum value in a set or bag. The function can only take set/bag expressions whose members are numeric types.

      - Return type
        A numeric type.

      - Parameters
        Parameter: setExp
        Description: An expression that evaluates to a SET, BAG, SetAccum or BagAccum
        Data type: SET, BAG, SetAccum, BagAccum

      - Example
        max([1, 2, -3, 4]) => 4
        max([1, 1, 3, 3]) => 3
      `
    )
  },
  {
    label: 'min()',
    detail: 'min( [DISTINCT] setExp )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the member with the minimum value in a set or bag. The function can only take set/bag expressions whose members are numeric types.

      - Return type
        A numeric type.

      - Parameters
        Parameter: setExp
        Description: An expression that evaluates to a SET, BAG, SetAccum or BagAccum
        Data type: SET, BAG, SetAccum, BagAccum

      - Example
        min([1, 2, -3, 4]) => -3
        min([1, 1, 3, 3]) => 1
      `
    )
  },
  {
    label: 'sum()',
    detail: 'sum( [DISTINCT] setExp )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the sum of all members in a set or bag. The function can only take set/bag expressions whose members are numeric types.

      - Return type
        A numeric type.

      - Parameters
        Parameter: setExp
        Description: An expression that evaluates to a SET, BAG, SetAccum or BagAccum
        Data type: SET, BAG, SetAccum, BagAccum

      - Example
        sum([1, 2, -3, 4]) => 4
        sum([1, 1, 3, 3]) => 8
      `
    )
  },
  {
    label: 'datetime_add()',
    detail: 'datetime_add( date, INTERVAL int_value time_unit )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Calculates a new DATETIME from a specified datepart multiplied by a specified amount, added to a specified DATETIME.
        INTERVAL is a keyword that must be entered exactly as shown. time_unit is one of the keywords YEAR, MONTH, DAY, HOUR, MINUTE, or SECOND.

      - Return type
        DATETIME

      - Parameters
        Parameter: date
        Description: The DATETIME to add to.
        Data type: DATETIME

        Parameter: int_value
        Description: An integer value
        Data type: INT
      
      - Example
        datetime_add(to_datetime("1970-01-01 00:00:00"), INTERVAL 1 MONTH)
            -> 1970-02-01 00:00:00
      `
    )
  },
  {
    label: 'datetime_diff()',
    detail: 'datetime_diff( date1, date2 )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Calculates the difference in seconds between two DATETIME values.

      - Return type
        INT

      - Parameters
        Parameter: date1
        Description: A DATETIME value
        Data type: DATETIME

        Parameter: date2
        Description: A DATETIME value
        Data type: DATETIME

      - Example
        datetime_diff(to_datetime("2020-01-01 00:00:00"), to_datetime("2020-02-03 04:13:12"))
            -> -2866392
      `
    )
  },
  {
    label: 'datetime_format()',
    detail: 'datetime_format(date[, str])',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Prints a DATETIME value in a specific format indicated by a provided string.

      - Return type
        STRING

      - Parameters
        Parameter: date
        Description: A DATETIME value
        Data type: DATETIME
      
        Parameter: str
        Description: A string pattern expressing the format to print date in. Use the following specifiers in your string to insert the corresponding value in the output.

                    %Y - year
                    
                    %m - month
                    
                    %d - day of month
                    
                    %H - hour
                    
                    %M - minute
                    
                    %S - second
                    
                    The default value for this parameter is "%Y-%m-%d %H:%M:%S"
        Data type: STRING

      - Example
        datetime_format(to_datetime("2020-01-02 05:30:12"), "hi, it's %Y-%m-%d")
            -> "hi, it's 2020-01-02"
      `
    )
  },
  {
    label: 'datetime_sub( )',
    detail: 'datetime_sub(date, INTERVAL int_value time_unit)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Calculates a new DATETIME from a specified datepart multiplied by a specified amount, subtracted from a specified DATETIME.
        INTERVAL is a keyword that must be entered exactly as shown. time_unit is one of the keywords YEAR, MONTH, DAY, HOUR, MINUTE, or SECOND.

      - Return type
        DATETIME

      - Parameters
        Parameter: date
        Description: The DATETIME to subtract from
        Data type: DATETIME

        Parameter: int_value
        Description: An integer value
        Data type: INT
      
      - Example
        datetime_add(to_datetime("1970-02-01 00:00:00"), INTERVAL 1 MONTH) -> 1970-01-01 00:00:00
      `
    )
  },
  {
    label: 'datetime_to_epoch()',
    detail: 'datetime_to_epoch( date )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Converts a DATETIME value to epoch time.

      - Return type
        INT

      - Parameters
        Parameter: date
        Description: A DATETIME value
        Data type: DATETIME
      
      - Example
        datetime_to_epoch(to_datetime("1970-01-01 00:01:00")) -> 60
      `
    )
  },
  {
    label: 'day()',
    detail: 'day( date )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the day of the month of a DATETIME value.

      - Return type
        INT

      - Parameters
        Parameter: date
        Description: A DATETIME value
        Data type: DATETIME

      - Example
        day(to_datetime("1973-01-05 00:00:00")) -> 5
      `
    )
  },
  {
    label: 'epoch_to_datetime()',
    detail: 'epoch_to_datetime(int_value)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Converts an epoch time value to a DATETIME value.

      - Return type
        DATETIME

      - Parameters
        Parameter: int_value
        Description: An epoch time value
        Data type: INT

      - Example
        epoch_to_datetime(1) -> 1970-01-01 00:00:01
      `
    )
  },
  {
    label: 'hour()',
    detail: 'hour(date)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Extracts the hour of the day from a DATETIME value.

      - Return type
        INT

      - Parameters
        Parameter: date
        Description: A DATETIME value
        Data type: DATETIME
      
      - Example
        hour(to_datetime("1980-01-01 15:01:02")) -> 15
      `
    )
  },
  {
    label: 'minute()',
    detail: 'minute(date)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Extracts the minute of the hour from a DATETIME value.

      - Return type
        INT

      - Parameters
        Parameter: date
        Description: A DATETIME value
        Data type: DATETIME

      - Example
        minute(to_datetime("1980-02-05 03:04:05")) -> 4
      `
    )
  },
  {
    label: 'month()',
    detail: 'month(date)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Extracts the month of the year from a DATETIME value.

      - Return type

      - Parameters
        Parameter: date
        Description: A DATETIME value
        Data type: DATETIME
      
      - Example
        month(to_datetime("1980-02-05 03:04:05")) -> 2
      `
    )
  },
  {
    label: 'now()',
    detail: 'now()',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the current UTC time in DATETIME.

      - Return type
        DATETIME

      - Parameters
        None.

      - Example
        now() => "2021-11-13 00:32:16"
      `
    )
  },
  {
    label: 'second()',
    detail: 'second(date)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Extracts the seconds value from a DATETIME value.

      - Return type
        INT

      - Parameters
        Parameter: date
        Description: A DATETIME value
        Data type: DATETIME

      - Example
        second(to_datetime("1980-02-05 03:04:05")) -> 5
      `
    )
  },
  {
    label: 'year()',
    detail: 'year(date)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Extracts the year from a DATETIME value.

      - Return type
        INT

      - Parameters
        Parameter: date
        Description: A DATETIME value
        Data type: DATETIME

      - Example
        year(to_datetime("1980-02-05 03:04:05")) -> 1980
      `
    )
  },
  {
    label: 'abs()',
    detail: 'abs( num )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the absolute value of a number.

      - Return type
        Number

      - Parameters
        Parameter: num
        Description: The number to return the absolute value for
        Data type: Number
      `
    )
  },
  {
    label: 'ceil()',
    detail: 'ceil(num)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Rounds a number up to the smallest integer that's greater than or equal to the number.

      - Return type
        INT

      - Parameters
        Parameter: num
        Description: The number to round up from
        Data type: Number
      `
    )
  },
  {
    label: 'exp()',
    detail: 'exp(num)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the base-e exponential of a number.

      - Return type
        FLOAT

      - Parameters
        Parameter: num
        Description: The exponent
        Data type: Number
      `
    )
  },
  {
    label: 'float_to_int()',
    detail: 'float_to_int (num)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Converts a floating-point number to an integer by truncating the floating part.

      - Return type
        INT

      - Parameters
        Parameter: num
        Description: The floating-point number to convert to integer
        Data type: FLOAT
      `
    )
  },
  {
    label: 'floor()',
    detail: 'floor(num)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Rounds a number down to the biggest integer that is smaller than or equal to the number.
  
      - Return type
        INT
  
      - Parameters
        Parameter: num
        Description: The number to round down from
        Data type: Number
      `
    )
  },
  {
    label: 'fmod()',
    detail: 'fmod(numer, denom)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the floating-point remainder of numer divided by denom

      - Return type
        FLOAT

      - Parameters
        Parameter: numer
        Description: The dividend
        Data type: Number

        Parameter: denom
        Description: The divisor
        Data type: Number
      `
    )
  },
  {
    label: 'ldexp()',
    detail: 'ldexp(x, exp)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns x multiplied by 2 raised to the power of exp
        x*2^exp

      - Return type
        FLOAT

      - Parameters
        Parameter: x
        Description: The base
        Data type: Number

        Parameter: exp
        Description: The exponent of 2
        Data type: Number
      `
    )
  },
  {
    label: 'PI()',
    detail: 'PI()',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the value of π.

      - Return type
        DOUBLE

      - Parameters
        None.

      - Example
        PI() * 1000000000 -> 3.141592653589793E9
      `
    )
  },
  {
    label: 'pow()',
    detail: 'pow(base, exp)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the power of a number.

      - Return type
        FLOAT

      - Parameters
        Parameter: base
        Description: The base
        Data type: Number

        Parameter: exp
        Description: The exponent
        Data type: Number
      `
    )
  },
  {
    label: 'rand()',
    detail: 'rand( [seed] )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns a completely random number >= 0 and <1. If seed is specified, it returns a repeatable sequence of random numbers. If no seed is specified, it returns a completely random number.

      - Return type
        DOUBLE

      - Parameters
        Parameter: seed
        Description: Optional. If seed is specified, it returns a repeatable sequence of random numbers. If no seed is specified, it returns a completely random number
        Data type: UINT
      
      - Example
        rand(5) -> 0.05518
        rand(5) -> 0.83133
        rand(5) -> 0.36374
      `
    )
  },
  {
    label: 'round()',
    detail: 'round ( num[, integer] )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Rounds a number to a specified place relative to the decimal point and returns the result.

      - Return type
        A numeric type.

      - Parameters
        Parameter: num
        Description: The number to be rounded
        Data type: Number

        Parameter: integer
        Description:  Optional. An integer value indicating the place to round the first argument to.
                      +
                      If integer is positive, the function returns num rounded to integer places to the right of the decimal point. If you omit integer, then num is rounded to zero places. If integer is negative, then num is rounded off to the left of the decimal point.
        Data type: Number
      
      - Examples
        round(15.213) => 15
        round(15.213, -1) => 20
        round(2.15, 1) => 2.2
        round(2.25, 1) => 2.3
      `
    )
  },
  {
    label: 'sign()',
    detail: 'sign( num )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the sign of a number. If the number is positive, return 1; if the number is negative, return -1; if the number is 0, return 0

      - Return type
        INT

      - Parameters
        Parameter: num
        Description: A numeric value
        Data type: INT, DOUBLE
      
      - Examples
        sign(100) => 1
        sign(0) => 0
        sign(-1.23) => -1
      `
    )
  },
  {
    label: 'square()',
    detail: 'square( num )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the square of a number.

      - Return type
        A numeric type.

      - Parameters
        Parameter: num
        Description: A numeric value
        Data type: INT, FLOAT, or DOUBLE
      
      - Examples
        square(0) => 0
        square(50) => 2500
        square(-50) => 2500
      `
    )
  },
  {
    label: 'sqrt()',
    detail: 'sqrt(num)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the square root of a number

      - Return type
        FLOAT

      - Parameters
        Parameter: num
        Description: The number to get square root for.
        Data type: Number
      `
    )
  },
  {
    label: 'trunc()',
    detail: 'trunc( num, [decimal_place] )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns a number truncated to a specified decimal place.

      - Return type
        A numeric type.

      - Parameters
        Parameter: num
        Description: The number to be truncated
        Data type: INT, FLOAT or DOUBLE

        Parameter: decimal_place
        Description: Optional. The integer indicating the decimal place to truncate the number to. If decimal_plac is positive, the function returns the number truncated to decimal_place decimal places. If decimal_place is omitted, then the number is truncated to 0 places. decimal_place can be negative to truncate (make zero) decimal_place digits left of the decimal point.
        Data type: INT
    
      - Examples
        trunc(9.99) => 9
        trunc(-9.99) => 9
        trunc(99.999. -1) => 90
        trunc(9.99, 1) => 9.9
      `
    )
  },
  {
    label: 'log()',
    detail: 'log(num)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the natural logarithm of a number (base e).

      - Return type
        DOUBLE

      - Parameters
        Parameter: num
        Description: The number to compute natural logarithm for
        Data type: Number
      `
    )
  },
  {
    label: 'log2()',
    detail: 'log2( num )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the base-2 logarithm of a number.

      - Return type
        DOUBLE

      - Parameters
        Parameter: num
        Description: A numeric value
        Data type: INT, FLOAT, DOUBLE
      
      - Examples
        log2(0.5) => -1
        log2(1) => 0
        log2(3) => 1.58
      `
    )
  },
  {
    label: 'log10()',
    detail: 'log10(num)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Return the common logarithm of a number (base 10).

      - Return type
        FLOAT

      - Parameters
        Parameter: num
        Description: The number to compute common logarithm for
        Data type: Number
      `
    )
  },
  {
    label: 'acos()',
    detail: 'acos(num)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the arc cosine of a number.

      - Return type
        FLOAT

      - Parameters
        Parameter: num
        Description: The number to compute arccosine for
        Data type: Number
      `
    )
  },
  {
    label: 'asin()',
    detail: 'asin(num)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the arc sine of a number.

      - Return type
        FLOAT

      - Parameters
        Parameter: num
        Description: The number to compute arcsine for
        Data type: Number
      `
    )
  },
  {
    label: 'atan()',
    detail: 'atan(num)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the arctangent of a number.

      - Return type
        FLOAT

      - Parameters
        Parameter: num
        Description: The number to compute arctangent for
        Data type: Number
      `
    )
  },
  {
    label: 'atan2()',
    detail: 'atan2(y, x)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the arctangent of a fraction.
        atan(y/x)

      - Return type
        FLOAT

      - Parameters
        Parameter: y
        Description: The dividend of the fraction to compute arctangent for
        Data type: Number

        Parameter: x
        Description: The divisor of the fraction to compute arctangent for
        Data type: Number
      `
    )
  },
  {
    label: 'cos()',
    detail: 'cos(num)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the cosine of a number.

      - Return type
        FLOAT

      - Parameters
        Parameter: num
        Description: The number to return cosine for
        Data type: Number
      `
    )
  },
  {
    label: 'cosh()',
    detail: 'cosh(num)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the hyperbolic cosine of a number.

      - Return type
        FLOAT

      - Parameters
        Parameter: num
        Description: The number to compute hyperbolic cosine for
        Data type: Number
      `
    )
  },
  {
    label: 'cot()',
    detail: 'cot( num )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the cotangent of a number.

      - Return type
        DOUBLE

      - Parameters
        Parameter: num
        Description: A numeric value
        Data type: INT, FLOAT, or DOUBLE

      - Examples
        cot(6) => -3.4363530041801278
        cot(-1) => -0.64209261593433065
      `
    )
  },
  {
    label: 'degrees()',
    detail: 'degrees( num )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Converts a value in radians to degrees.

      - Return type
        DOUBLE

      - Parameters
        Parameter: num
        Description: A numeric value
        Data type: INT, FLOAT, or DOUBLE

      - Examples
        degrees(2) => 114.59155902616465
        degrees(1) => -57.29577951308232
      `
    )
  },
  {
    label: 'radians()',
    detail: 'radians( num )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Converts a value in degrees to radians.

      - Return type
        DOUBLE

      - Parameters
        Parameter: num
        Description: A numeric value
        Data type: INT, FLOAT, or DOUBLE

      - Examples
        radians( 45 ) => -0.7853981633974483
        radians( 30 ) => 0.5235987755982988
        radians( 50 ) => 0.8726646259971648
      `
    )
  },
  {
    label: 'sin()',
    detail: 'sin(num)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the sine of a number.

      - Return type
        FLOAT

      - Parameters
        Parameter: num
        Description: The number to compute sine for
        Data type: INT, FLOAT, or DOUBLE
      `
    )
  },
  {
    label: 'sinh()',
    detail: 'sinh(num)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the hyperbolic sine of a number.

      - Return type
        FLOAT

      - Parameters
        Parameter: num
        Description: The number to compute hyperbolic sine for
        Data type: INT, FLOAT, or DOUBLE
      `
    )
  },
  {
    label: 'tan()',
    detail: 'tan(num)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the tangent of a number.

      - Return type
        FLOAT

      - Parameters
        Parameter: num
        Description: The number to compute tangent for
        Data type: Number
      `
    )
  },
  {
    label: 'tanh()',
    detail: 'tanh(num)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the hyperbolic tangent of a number.

      - Return type
        FLOAT

      - Parameters
        Parameter: num
        Description: The number to compute hyperbolic tangent for
        Data type: Number
      `
    )
  },
  {
    label: 'coalesce()',
    detail: 'coalesce( exp [, exp ...] )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the first expression that isn't NULL.
        This function requires all its arguments have the same data type (BOOL, INT, FLOAT, DOUBLE, STRING, or VERTEX). The only exception is that different numeric types can be used together. In this case, all values are converted into the first argument type.

      - Return type
        BOOL, INT, FLOAT, DOUBLE, STRING, or VERTEX

      - Parameters
        The function takes a number of parameters and returns the first one that does not evaluate to NULL

      - Example
        CREATE QUERY coalesceFuncEx (INT p1, DOUBLE p2) FOR GRAPH social {
          PRINT COALESCE(p1, p2, 999.5);  # p2 and the last value will be converted into first argument type, which is INT.
        }
      `
    )
  },
  {
    label: 'evaluate()',
    detail: 'evaluate( expressionStr, typeStr )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Takes a string argument and interprets it as an expression which is evaluated during run-time. This enables users to create a general purpose query instead of separate queries for each specific computation.
        This function cannot be nested.
        The following situations generate a run-time error:
        The expression string expressionStr cannot be compiled (unless the error is due to a non-existent vertex or edge attribute).
        The result type of the expression does not match the parameter typeStr.
        
        CAUTION
        Silent failure conditions
        If any of the following conditions occur, the query may continue running, but the entire clause or statement in which the evaluate() function resides will fail, without producing a run-time error message. For conditional clauses (WHERE, HAVING), a failing evaluate() clause is treated as if the condition is false. An assignment statement with a failing evaluate() will not execute, and an ORDER BY clause with a failing evaluate() will not sort.
        The expression references a non-existent attribute of a vertex or edge alias.
        The expression uses an operator for non-compatible operation. For example, 123 == "xyz".

      - Return type
        Type indicated by typeStr

      - Parameters
        Parameter: expressionStr
        Description:  The expression to evaluate typed as a string.
                      Identifiers used in the expression can refer only to a vertex or edge aliases, vertex-attached accumulators, global accumulators, parameters, or scalar function calls involving the above variables.
                      The expression may not refer to local variables, global variables, or to FROM clause vertices or edges by type.
                      Any accumulators in the expression must be scalar accumulators (e.g., MaxAccum) for primitive-type data. Container accumulators (e.g., SetAccum) or scalar accumulators with non-primitive type (e.g. VERTEX, EDGE, DATETIME) are not supported. Container type attributes are not supported.
        Data type: STRING

        Parameter: typeStr
        Description:  The return type for the function call. It must be a string literal for a primitive data type, e.g., one of "int", "float", "double", "bool", "string" (case insensitive).
                      The default value is "bool".
        Data type: STRING

      - Example
        CREATE QUERY evaluateEx (STRING whereCond = "TRUE", STRING postAccumIntExpr = "1") FOR GRAPH socialNet {
          SetAccum<INT> @@timeSet;
          MaxAccum<INT> @latestLikeTime, @latestLikePostTime;
        
          S = {person.*};
          S2 = SELECT s
              FROM S:s - (liked>:e) - post:t
              WHERE evaluate(whereCond)
              ACCUM s.@latestLikeTime += datetime_to_epoch( e.actionTime ),
                    s.@latestLikePostTime += datetime_to_epoch( t.postTime )
              POST-ACCUM @@timeSet += evaluate(postAccumIntExpr, "int")
              ;
          PRINT @@timeSet;
        }
      `
    )
  },
  {
    label: 'ascii()',
    detail: 'ascii( str )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the ASCII (numeric) position of the first character in a string. If the argument is an empty string, returns 0.

      - Return type
        INT

      - Parameters
        Parameter: str
        Description: A string value
        Data type: STRING

      - Example
        ascii("") => 0
        ascii("A") => 65
      `
    )
  },
  {
    label: 'chr()',
    detail: 'chr( n )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Converts an integer to a character according to its ASCII position. If the input value n is greater than 255, returns the character at the position of the modulo of n / 256.

      - Return type
        STRING

      - Parameters
        Parameter: n
        Description: An integer value
        Data type: INT

      - Examples
        chr(65) => 'A'
        chr(322) => 'B'
      `
    )
  },
  {
    label: 'difference()',
    detail: 'difference(str1, str2)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Compares the Soundex codes of two strings and returns an integer. The return value ranges from 0 to 4, and it indicates the similarity between the input strings' phonetic representation values.
        0 indicates weak similarity, and 4 indicates strong similarity with identical phonetic representation values.

      - Return type
        INT

      - Parameters
        Parameter: str1
        Description: A string value
        Data type: STRING

        Parameter: str2
        Description: A string value
        Data type: STRING

      - Examples
        difference("Johnson", "Jonson") => 4
        difference("Adams", "Addamms") => 4
        difference("Mary", "Bob") => 2
      `
    )
  },
  {
    label: 'find_in_set()',
    detail: 'find_in_set(str, str_list)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the position of a string within a list of strings separated by commas.
        If string is not found in string_list, this function returns -1.
        NOTE
          find_in_set does not ignore whitespace after the comma. For example, find_in_set("a", "b a, a") = 0, indicating that a is not an element in the list. This happens because the second and third elements of the list are space+a, rather than a.

      - Return type
        INT

      - Parameters
        Parameter: str
        Description: A string value
        Data type: STRING

        Parameter: str_list
        Description: A string representation of a list of strings.
        Data type: STRING

      - Example
        find_in_set("a","") => 0
        find_in_set("a","b,c,d") => 0
        find_in_set("a","b,a,d") => 2
      `
    )
  },
  {
    label: 'gsql_uuid_v4()',
    detail: 'gsql_uuid_v4()',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Generates and returns a version-4 universally unique identifier (UUID).

      - Return type
        STRING

      - Parameters
        None.
      `
    )
  },
  {
    label: 'insert()',
    detail: 'insert(str1, position[, number], str2)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Inserts a string within a string at the specified position and for a certain number of characters, and replaces a specified number of characters starting from the insertion position. The starting index is 0.

      - Return type
        STRING

      - Parameters
        Parameter: str1
        Description: The string to insert another string into
        Data type: STRING

        Parameter: position
        Description: The index of the starting position to insert the string
        Data type: INT

        Parameter: number
        Description: Optional. The number of characters from the original string that will be replaced. If the argument is left off, it defaults to 0.
        Data type: Number

        Parameter: str2
        Description: The string to be inserted
        Data type: STRING

      - Examples
        insert("tigergraph.com", 0, 10, "Example") => "Example.com”
        insert("tigergraph.com", 0, 2, "Example") => "Examplegergraph.com”
        insert("tigergraph.com", 2, 20, "Example") => ”tiExample”
        insert("Complete blank.", 9, "every ") => "Complete every blank."
      `
    )
  },
  {
    label: 'instr()',
    detail: 'instr (str, substr [, position, occurrence])',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Searches a string str for a substring substr and returns the location of the substring in the string. If a substring that is equal to substr is found, then the function returns an integer indicating the position of the first character of this substring. If no such substring is found, then the function returns -1.

      - Return type
        INT

      - Parameters
        Parameter: str
        Description: The string to search
        Data type: STRING

        Parameter: substr
        Description: The string to search for in str
        Data type: STRING

        Parameter: position
        Description: Optional. The position is a nonzero integer indicating the character of str from where the search begins. If omitted, it defaults to 0. The first position in the string is 0. If position is negative, then the function counts backward from the end of str and then searches backward from the resulting position.
        Data type: INT

        Parameter: occurrence
        Description: Optional, The occurrence is an integer indicating which occurrence of substr in str the function should search for.
        Data type: STRING

      - Example
        instr("This is the thing", "Th") -> 0;
        instr("This is the thing", "is", 3) -> 5;
      `
    )
  },
  {
    label: 'left()',
    detail: 'left(str, number_of_chars)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Extracts a number of characters from a string starting from position 0 (capturing left to right).

      - Return type
        STRING

      - Parameters
        Parameter: str
        Description: A string value
        Data type: STRING

        Parameter: number_of_chars
        Description: The number of characters to extract
        Data type: INT
      `
    )
  },
  {
    label: 'length()',
    detail: 'length(str)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the length of the input string.

      - Return type
        INT

      - Parameters
        Parameter: str
        Description: The string whose length to evaluate
        Data type: STRING

      - Example
        length("hello world") -> 11
        length("") -> 0
      `
    )
  },
  {
    label: 'ltrim()',
    detail: 'ltrim( str[, set] )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Removes all occurrences of the characters contained in a set from a string from the left side.、
        The function begins scanning the string from its first character, removing all characters that appear in set until reaching a character not in set, then returning the result.

      - Return type
        STRING

      - Parameters
        Parameter: str
        Description: A string value
        Data type: STRING

        Parameter: set
        Description: Optional. A string of characters. The distinct characters from the string form the set. If not specified, it defaults to a single space.
        Data type: STRING
      `
    )
  },
  {
    label: 'lower()',
    detail: 'lower(str)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the input string with all letters in lowercase.

      - Return type
        STRING

      - Parameters
        Parameter: str
        Description: The string to convert to lowercase
        Data type: STRING

      - Example
        lower("GSQL") -> "gsql"
      `
    )
  },
  {
    label: 'lpad()',
    detail: 'lpad(str, padded_length [, pad_str] )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Pads the left side of a string with another pad string. If the pad string pad_str is omitted, it will pad with white space. If the parameter length is smaller than the original string, it will truncate the string from the right side.

      - Return type
        STRING

      - Parameters
        Parameter: str
        Description: The string to pad characters to
        Data type: STRING

        Parameter: padded_length
        Description: The number of characters to return. If the padded_length is smaller than the original string, the lpad function will truncate the string to the size of padded_length.
        Data type: INT

        Parameter: pad_str
        Description: Optional. This is the string that will be padded to the left-hand side of str. If this parameter is omitted, the lpad function will pad spaces to the left side of str.
        Data type: STRING

      - Example
        lpad("PQR", 5) -> "  PQR"
        lpad("PQR", 2) -> "PQ"
        lpad("PQR", 10, "ABC") -> "ABCABCAPQR"
      `
    )
  },
  {
    label: 'replace()',
    detail: 'replace(str, str_to_replace [, replacement_str])',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Replaces a sequence of characters in a string with another set of characters.

      - Return type
        STRING

      - Parameters
        Parameter: str
        Description: The original string whose substrings are to be replaced
        Data type: STRING

        Parameter: str_to_replace
        Description: The string that will be searched for and replaced in str
        Data type: STRING

        Parameter: replacement_str
        Description: Optional. The string that will replace str_to_replace. If omitted, replace() removes all occurrences of string_to_replace and returns the resulting string.
        Data type: STRING

      - Examples
        replace("SSQLL", "S", "G") -> "GGQLL"
        replace("SSQLL", "SQL", "Q") -> "SQL"
        replace("SSQLL", "L") -> "SSQ"
      `
    )
  },
  {
    label: 'right()',
    detail: 'right(str, number_of_chars)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Extracts a number of characters from a string starting from the right.

      - Return type
        STRING

      - Parameters
        Parameter: str
        Description: A string value
        Data type: STRING

        Parameter: number_of_chars
        Description: The number of characters to extract
        Data type: INT
      `
    )
  },
  {
    label: 'rpad()',
    detail: 'rpad(str, padded_length [, pad_str] )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Pads the right side of a string (str) with another pad string. If the pad string (pad_str) is omitted, it will pad with white space. If the parameter length is smaller than the original string, it will truncate the string from the right side.

      - Return type
        STRING

      - Parameters
        Parameter: str
        Description: The string to pad characters to
        Data type: STRING

        Parameter: padded_length
        Description: The number of characters to return. If the padded_length is smaller than the original string, the lpad function will truncate the string to the size of padded_length.
        Data type: INT

        Parameter: pad_str
        Description: Optional. This is the string that will be padded to the right-hand side of str. If this parameter is omitted, the lpad function will pad spaces to the right side of str.
        Data type: STRING

      - Example
        rpad("PQR", 5) -> "PQF  "
        lpad("PQR", 2) -> "PQ"
        lpad("PQR", 10, "ABC") -> "ABCABCAPQR"
      `
    )
  },
  {
    label: 'rtrim()',
    detail: 'rtrim( str [,set] )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Removes all occurrences of the characters contained in a set from a string from the right side.
        The function begins scanning the string from its last character and removes all characters that appear in set until reaching a character not in set and then returns the result.

      - Return type
        STRING

      - Parameters
        Parameter: str
        Description: A string value
        Data type: STRING

        Parameter: set
        Description: Optional. A string of characters. The distinct characters from the string form the set. If not specified, it defaults to a single space.
        Data type: STRING
      `
    )
  },
  {
    label: 'soundex()',
    detail: 'soundex( str )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        1.  Returns a character string containing the Soundex code of str. This function lets you compare words that are spelled differently, but sound alike in English.
            Soundex is a phonetic algorithm defined in The Art of Computer Programming, Volume 3: Sorting and Searching, by Donald E. Knuth, as follows:
            Retain the first letter of the string and remove all other occurrences of the following letters: a, e, h, i, o, u, w, y.
        2.  Assign numbers to the remaining letters (after the first) as follows:
            b, f, p, v = 1
            c, g, j, k, q, s, x, z = 2
            d, t = 3
            l = 4
            m, n = 5
            r = 6
        3.  If two or more letters with the same number were adjacent in the original name (before step 1), or adjacent except for any intervening h and w, then retain the first letter and omit the rest of all the adjacent letters with the same number.
        4.  Return the first four bytes padded with 0.

      - Return type
        STRING

      - Parameters
        Parameter: str
        Description: A string value
        Data type: STRING
      
      - Examples
        soundex("Ashcraft") => "A261"
        soundex("Burroughs") => "B620"
        soundex("Burrows") => "B620"
      `
    )
  },
  {
    label: 'space()',
    detail: 'space( n )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns a string that contains the specified number of space characters

      - Return type
        STRING

      - Parameters
        Parameter: n
        Description: An integer value
        Data type: INT
      
      - Examples
        space(0) = ""
        space(1) = " "
        space(5) = "     "
      `
    )
  },
  {
    label: 'substr()',
    detail: 'substr(str, start [, length])',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the substring indicated by the start point and length. If the parameter length is omitted, then the returned substring will extend to the end of the given input string.

      - Return type
        STRING

      - Parameters
        Parameter: str
        Description: The string to extract substring from
        Data type: STRING

        Parameter: start
        Description: The position that indicates the start of the substring
        Data type: INT

        Parameter: length
        Description: Optional. The length of the substring. If omitted, the substring will extend from start to the end of str.
        Data type: INT
      
      - Example
        substr("ABCDE", 2) -> "CDE"
        substr("ABCDE", 2, 2) -> "CD"
        substr("ABCDE", -2, 1) -> "D"
      `
    )
  },
  {
    label: 'translate()',
    detail: 'translate( str_origin, characters, translations )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the string from the first argument after the characters specified in the second argument are translated into the characters specified at the same index in the third argument.
        The function will return an error if characters and translations have different lengths.

      - Return type
        STRING

      - Parameters
        Parameter: str_origin
        Description: A string value
        Data type: STRING

        Parameter: characters
        Description: A string of characters
        Data type: STRING

        Parameter: translations
        Description: A string of characters
        Data type: STRING
      
      - Examples
        translate("Hello world", "", "") => "Hello world"
        translate("Hello world", "o", "U") => "HellU wUrld"
        translate("Hello world", "lo", "aU") => "HeaaU wUrad"
        translate(", "lo", "aU") => "
      `
    )
  },
  {
    label: 'trim()',
    detail: 'trim( [ [ LEADING | TRAILING | BOTH ] [removal_char FROM] ] str )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Trims characters from the leading and/or trailing ends of a string.
        By using one of the keywords LEADING, TRAILING, or BOTH, the user can specify that characters are to be removed from the left end, right end, or both ends of the string respectively. BOTH is the default and will be used if no keywords are specified.

      - Return type
        STRING

      - Parameters
        Parameter: removal_char
        Description: Optional. The character to remove. If removal_char is not specified, the function will remove whitespaces, including spaces, tabs, and newlines. If removal_char is specified, the user must also write the keyword FROM between removal_char and str.
        Data type: STRING

        Parameter: str
        Description: A string value.
        Data type: STRING
      
      - Example
        trim("  Abc   ") => "Abc"
        trim( LEADING " a A   ") => "a A   "
        trim( TRAILING "a" FROM "aa ABC aaa") => "aa ABC "
      `
    )
  },
  {
    label: 'upper()',
    detail: 'upper(str)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the input string with all letters in uppercase.

      - Return type
        STRING

      - Parameters
        Parameter: str
        Description: The string to convert to uppercase
        Data type: STRING

        Parameter: str
        Description: A string value.
        Data type: STRING
      
      - Example
        upper("gsql") -> "GSQL"
      `
    )
  },
  {
    label: 'parse_json_array()',
    detail: 'parse_json_array( str )',
    documentation: new vscode.MarkdownString(
      `
      - Description
          Converts a string into a JSON array. The string must be properly formatted, or the function will generate a run-time error. To be properly formatted, besides having the proper nesting and matching of curly braces { } and brackets [ ], each value field must be one of the following:
            a string
            a number
            a boolean
            a JSONOBJECT - Each key of a key-value pair must be a string in double quotes.
            a JSON array

      - Return type
        JSONARRAY

      - Parameters
        Parameter: str
        Description: The string to be converted into a JSON array.
        Data type: STRING
      
      - Example
        parse_json_array("[123]") -> [123]
      `
    )
  },
  {
    label: 'parse_json_object()',
    detail: 'parse_json_object( str )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Converts a string into a JSON object. The string must be properly formatted, or the function will generate a run-time error. To be properly formatted, besides having the proper nesting and matching of curly braces { } and brackets [ ], each value field must be one of the following:
          a string
          a number
          a boolean
          a JSONOBJECT - Each key of a key-value pair must be a string in double quotes, and the quotes need to be escaped with a backlash-escape \. However, if you are supplying the string in GraphStudio as a parameter, you do not need the backlash-escape since string values are not enclosed in double quotes.
          a JSON array

      - Return type
        JSONOBJECT

      - Parameters
        Parameter: str
        Description: The string to be converted into a JSON object.
        Data type: STRING
      
      - Example
        parse_json_object("{\"abc\":123}")  -> {"abc": 123}
      `
    )
  },
  {
    label: 'str_to_int()',
    detail: 'str_to_int(str)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Converts a string to an integer.

      - Return type
        INT

      - Parameters
        Parameter: str
        Description: The string to be converted to an integer
        Data type: STRING
      `
    )
  },
  {
    label: 'to_datetime()',
    detail: 'to_datetime( str )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Converts a string value into a DATETIME value.

      - Return type
        DATETIME

      - Parameters
        Parameter: str
        Description: A string value
        Data type: STRING
      
      - Example
        to_datetime("2020-01-02 01:02:03") -> 2020-01-02 01:02:03
      `
    )
  },
  {
    label: 'to_string()',
    detail: 'to_string(num)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Converts a number to a string.

      - Return type
        STRING

      - Parameters
        Parameter: num
        Description: The number to turn into a string
        Data type: Number
      `
    )
  },
  {
    label: 'getvid()',
    detail: 'getvid( v )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the internal ID number of a vertex.
        The internal ID is not the primary ID which the user assigned when creating the vertex. However, there is a 1-to-1 mapping between the external ID (primary_id) and internal ID.
        The engine can access the internal ID faster than accessing the external ID, so if a query needs unique values for a large number of vertices, but doesn’t care about particular values, getvid() can be a useful option. For example, in many community detection algorithms, we start by assigning every vertex a unique community ID. Then, as the algorithm progresses, some vertices will join the community of one of their neighbors, giving up their current community ID and copying the IDs of their neighbors.

      - Return type
        INT

      - Parameters
        Parameter: v
        Description: A vertex alias.
        Data type: Vertex alias
      `
    )
  },
  {
    label: 'selectVertex()',
    detail: 'selectVertex( filepath, vertexIdColumn, vertexTypeColumn, seperator, header)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Reads a data file that lists particular vertices of the graph and returns the corresponding vertex set.This function can only be used in a vertex set variable declaration statement as a seed set and the vertices in the data file must already be in the graph.The data file must be organized as a table with one or more columns.One column must be for vertex ID.Optionally, another column is for vertex type.

      - Return type
        SET<VERTEX>

      - Parameters
        Parameter: filePath
        Description: The absolute file path of the input file to be read. A relative path is not supported.
        Data type:  STRING

        Parameter: vertexIdColumn
        Description:  The vertex ID column position.
                      The index for column positions starts at 0. Therefore, to designate the first column as the ID column, set this parameter to $0.
        Data type:  $ num
                    If header is set to true, $ "column_name" is also acceptable.
        
        Parameter: vertexTypeColumn
        Description: The vertex type column position or a specific vertex type.
        Data type:  $ num
                    If header is set to true,$ "column_name" is also acceptable.
                    Alternatively, a vertex type without double quotes.

        Parameter: separator
        Description: The column separator character.
        Data type:  STRING

        Parameter: header
        Description: Whether this file has a header.
        Data type:  BOOL
      `
    )
  },
  {
    label: 'to_vertex()',
    detail: 'to_vertex( id, vertex_type )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns a vertex from a string ID and vertex type. If a vertex with the provided ID and type does not exist, the function will throw a run-time error.

      - Return type
        VERTEX

      - Parameters
        Parameter: id
        Description: The ID of a vertex
        Data type:  STRING

        Parameter: vertex_type
        Description: The type of the vertex
        Data type: STRING
      `
    )
  },
  {
    label: 'to_vertex_set()',
    detail: 'to_vertex_set( id_set, vertex_type)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns a vertex set from a set or bag of string IDs and a vertex type. If there are invalid IDs in the set, those IDs will be skipped and the response will contain a warning message. If the vertex type does not exist, the function will throw a run-time error.

      - Return type
        SET<VERTEX>

      - Parameters
        Parameter: id_set
        Description: A set of vertex IDs
        Data type:  SET<STRING>, BAG<STRING>

        Parameter: vertex_type
        Description: The type of the vertices
        Data type: STRING
      `
    )
  },
];

export const METHODS: vscode.CompletionItem[] = [
  {
    label: 'getAttr()',
    detail: 'e.getAttr( attrName, attrType )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the value of an attribute of the edge.

      - Return type
        The data type of the attribute itself.

      - Parameters
          Parameter: attrName
          Description: The name of the attribute.
          Data type: STRING

          Parameter: attrType
          Description: The type of the attribute
          Data type: STRING
      
      - Example
        If we have the following edge:
        {
              "e_type": "User_Video",
              "directed": false,
              "from_id": "0",
              "from_type": "VidUser",
              "to_id": "2",
              "to_type": "Video",
              "attributes": {
                "rating": 5.2,
                "date_time": 0
        }
        Assume the alias of the edge is e:
        e.getAttr("rating", "DOUBLE") -> 5.2
      `
    )
  },
  {
    label: 'isDirected()',
    detail: 'e.isDirected()',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns a boolean value indicating whether the edge is directed or undirected.

      - Return type
        BOOL

      - Parameters
        None.
      `
    )
  },
  {
    label: 'setAttr()',
    detail: 'e.setAttr( attrName, attrNewValue )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Sets an attribute of an edge to a new value.

      - Return type
        No return value.

      - Parameters
          Parameter: attrName
          Description: The name of the attribute. This argument must be a query parameter.
          Data type: STRING

          Parameter: attrNewValue
          Description: The new value of the attribute
          Data type: The type of the attribute.
      
      - Example
        CREATE QUERY setAttrExample(STRING attr){ 
          Current = {v_type.*}
          S = SELECT s
                  FROM Current:s -(e_type:e) -> v_type:t
                  WHERE t.attribute1 == "example_value"
                  ACCUM e.setAttr(attr, TRUE); 
        }
        The first argument of e.setAttr must be a query parameter. Therefore, in this example we are passing a string value in the query parameter attr. The string value should be the name of the attribute you want to call the function with.
        Selected edges will have their specified attribute set to TRUE.
      `
    )
  },
  {
    label: 'containsKey()',
    detail: 'jsonobject.containsKey( keyStr )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns a boolean value indicating whether the JSON object contains a specified key.

      - Return type
        BOOL

      - Parameters
          Parameter: keyStr
          Description: A string.
          Data type: STRING
      
      - Example
        If we have the following JSON object represented by the variable han:
          {
              "name": "Han Solo",
              "age": "39",
              "occupation": "mercenary"
          }
        Then:
          han.containsKey("name") -> true
          han.containsKey("isJedi") -> false
      `
    )
  },
  {
    label: 'getBool()',
    detail: 'jsonobject.getBool( keyStr )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the boolean value associated with a specified key. If the key provided is associated with a non-boolean value, the function will raise a runtime error.

      - Return type
        BOOL

      - Parameters
          Parameter: keyStr
          Description: The key whose value to return
          Data type: STRING
      
      - Example
        If we have the following JSON object represented by the variable han:
          {
              "name": "Han Solo",
              "age": 39,
              "occupation": "mercenary",
              "isJedi": false
          }
        Then:
          han.getBool("isJedi") -> false
      `
    )
  },
  {
    label: 'getDouble()',
    detail: 'jsonobject.getDouble( keyStr )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the double value associated with a specified key. If the key provided is associated with a non-double value, the function will raise a runtime error.

      - Return type
        BOOL

      - Parameters
          Parameter: keyStr
          Description: The key whose value to return
          Data type: STRING
      `
    )
  },
  {
    label: 'getInt()',
    detail: 'jsonobject.getInt( keyStr )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the integer value associated with a specified key. If the key provided is associated with a non-int value, the function will raise a runtime error.

      - Return type
        INT

      - Parameters
          Parameter: keyStr
          Description: The key whose value to return
          Data type: STRING
      `
    )
  },
  {
    label: 'getJsonArray()',
    detail: 'jsonobject.getJsonArray( keyStr )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the JSON array value associated with a specified key. If the key provided is associated with a value whose type is not JSON array, the function will raise a runtime error.

      - Return type
        JSONARRAY

      - Parameters
          Parameter: keyStr
          Description: The key whose value to return
          Data type: STRING
      `
    )
  },
  {
    label: 'getJsonObject()',
    detail: 'jsonobject.getJsonObject( keyStr )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the value associated with a specified key. If the key provided is associated with value whose type is not JSON object, the function will raise a runtime error.

      - Return type
        JSONOBJECT

      - Parameters
          Parameter: keyStr
          Description: The key whose value to return
          Data type: STRING
      `
    )
  },
  {
    label: 'getString()',
    detail: 'jsonobject.getString( keyStr )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the string value associated with a specified key. If the key provided is associated with a non-string value, the function will raise a runtime error.

      - Return type
        JSONOBJECT

      - Parameters
          Parameter: keyStr
          Description: The key whose value to return
          Data type: STRING
      `
    )
  },
  {
    label: 'getBool()',
    detail: 'jsonarray.getBool( idx )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the boolean value at a specified index.

      - Return type
        BOOL

      - Parameters
          Parameter: idx
          Description: The index of the value to return
          Data type: INT
      `
    )
  },
  {
    label: 'getDouble()',
    detail: 'jsonarray.getDouble( idx )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the double at a specified index.

      - Return type
        DOUBLE

      - Parameters
          Parameter: idx
          Description: The index of the value to return
          Data type: INT
      `
    )
  },
  {
    label: 'getInt()',
    detail: 'jsonarray.getInt( idx )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the integer value at a specified index.

      - Return type
        INT

      - Parameters
          Parameter: idx
          Description: The index of the value to return
          Data type: INT
      `
    )
  },
  {
    label: 'getJsonArray()',
    detail: 'jsonarray.getJSONArray( idx )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the JSONArray value at a specified index.

      - Return type
        BOOL

      - Parameters
          Parameter: idx
          Description: The index of the value to return
          Data type: INT
      `
    )
  },
  {
    label: 'getJsonObject()',
    detail: 'jsonarray.getJsonObject( idx )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the JSONOBJECT value at a specified index.

      - Return type
        JSONOBJECT

      - Parameters
          Parameter: idx
          Description: The index of the value to return
          Data type: INT
      `
    )
  },
  {
    label: 'getString()',
    detail: 'jsonarray.getString( idx )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the boolean value at a specified index.

      - Return type
        STRING

      - Parameters
          Parameter: idx
          Description: The index of the value to return
          Data type: INT
      `
    )
  },
  {
    label: 'size()',
    detail: 'jsonarray.size()',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the size of the array.

      - Return type
        INT

      - Parameters
          None
      `
    )
  },
  {
    label: 'edgeAttribute()',
    detail: 'v.edgeAttribute( edgeType, attrName )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        From a vertex, traverse edges of a specified type and return the bag of values for a specified edge attribute.

      - Return type
        BagAccum<attrType>

      - Parameters
        Parameter: edgeType
        Description: The edge type to traverse
        Data type: STRING

        Parameter: attrName
        Description: The attribute whose value to retrieve
        Data type: STRING
      `
    )
  },
  {
    label: 'filter()',
    detail: `
    v.neighbors().filter( condition )
    v.neighborAttribute().filter( condition )
    v.edgeAttribute().filter( condition )
    `,
    documentation: new vscode.MarkdownString(
      `
      - Description
        This function is appended to neighbors(), neighborAttribute(), or edgeAttribute() to filter the output set according to a filter condition. Only elements that satisfy the condition will be returned.

      - Return type
        BagAccum

      - Parameters
        Parameter: condition
        Description: An expression that evaluates to a boolean value
        Data type: BOOL

      - Example
        Example query
          CREATE QUERY filterEx (SET<STRING> pIds, INT yr) FOR GRAPH workNet api("v2") {
          
            SetAccum<vertex<company>> @recentEmplr, @allEmplr;
            BagAccum<string> @diffCountry, @allCountry;
          
            Start = {person.*};
          
            L0 = SELECT v
                FROM  Start:v
                WHERE v.id IN pIds
                ACCUM
                  # filter using edge attribute
                  v.@recentEmplr += v.neighbors("worksFor").filter(worksFor.startYear >= yr),
                  v.@allEmplr += v.neighbors("worksFor").filter(true),
          
                  # vertex alias attribute and neighbor type attribute
                  v.@diffCountry += v.neighborAttribute("worksFor", "company", "id")
                                    .filter(v.locationId != company.country),
                  v.@allCountry += v.neighborAttribute("worksFor", "company", "id")
                ;
          
            PRINT yr, L0[L0.@recentEmplr, L0.@allEmplr, L0.@diffCountry, L0.@allCountry]; // api v2
          }
        Results
          GSQL > RUN QUERY filterEx(["person1","person2"],2016)
          {
            "error": false,
            "message": "",
            "version": {
              "edition": "developer",
              "schema": 0,
              "api": "v2"
            },
            "results": [{
              "L0": [
                {
                  "v_id": "person1",
                  "attributes": {
                    "L0.@diffCountry": ["company2"],
                    "L0.@recentEmplr": ["company1"],
                    "L0.@allCountry": [ "company1", "company2" ],
                    "L0.@allEmplr": [ "company2", "company1" ]
                  },
                  "v_type": "person"
                },
                {
                  "v_id": "person2",
                  "attributes": {
                    "L0.@diffCountry": ["company1"],
                    "L0.@recentEmplr": [],
                    "L0.@allCountry": [ "company1", "company2" ],
                    "L0.@allEmplr": [ "company2", "company1" ]
                  },
                  "v_type": "person"
                }
              ],
              "yr": 2016
            }]
          }
      `
    )
  },
  {
    label: 'getAttr()',
    detail: 'v.getAttr(attrName, attrType)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the value of a vertex attribute on the vertex.

      - Return type
        attrType

      - Parameters
        Parameter: attrName
        Description: A vertex attribute
        Data type: STRING

        Parameter: attrType
        Description: The type of the attribute value
        Data type: STRING
      `
    )
  },
  {
    label: 'neighborAttribute()',
    detail: 'v.neighborAttribute( edgeType, targetVertexType, attrName )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        From a vertex, traverses edges of a specified type to its neighbors of a specified type, and returns the set of values for a specified attribute.

      - Return type
        BagAccum<attrType>

      - Parameters
        Parameter: edgeType
        Description: The edge type to traverse
        Data type: STRING

        Parameter: targetVertexType
        Description: The target vertex type to visit
        Data type: STRING

        Parameter: attrName
        Description: An attribute of the target vertex type
        Data type: STRING
      `
    )
  },
  {
    label: 'neighbors()',
    detail: 'v.neighbors([edgeType])',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the out-neighbors or undirected neighbors of the vertex. If edge types are provided, it will only return the neighbors connected by the specified edge types.

      - Return type
        BagAccum<VERTEX>

      - Parameters
        Parameter: edgeType
        Description: Optional. An edge type or a collections of edge types.
        Data type: STRING, SET<STRING>, SetAccum<STRING>, BagAccum<STRING>, ListAccum<STRING>
      `
    )
  },
  {
    label: 'outdegree()',
    detail: 'v.outdegree([edgeType])',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the number of outgoing or undirected edges connected to the vertex. If edge types are provided, it will only return the number of edges of the specified types.

      - Return type
        INT

      - Parameters
        Parameter: edgeType
        Description: Optional. An edge type or a collection of edge types.
        Data type: STRING, SET<STRING>, SetAccum<STRING>, BagAccum<STRING>, ListAccum<STRING>
      `
    )
  },
  {
    label: 'setAttr()',
    detail: 'v.setAttr( attrName, newValue )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Sets the specified attribute of a vertex to a new value.

      - Return type
        No return value.

      - Parameters
        Parameter: attrName
        Description: The name of an attribute
        Data type: STRING

        Parameter: newValue
        Description: The new value for the attribute
        Data type: The type of the attribute.
      `
    )
  },
  {
    label: 'addTags()',
    detail: 'v.addTags(STRING tag1,... STRING tagN)',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Adds the tags provided in the argument list to the vertex.

      - Return type
        No return value.

      - Parameters
        Parameter: tagN
        Description: A tag to add to the vertex
        Data type: STRING

      - Example:
        CREATE QUERY addTagsToPerson() {
          Seed = { any };
          # person1 ~ person5 will be tagged as public.
          vSet = SELECT s
                FROM Seed:s
                WHERE s.id IN ("person1","person2","person3","person4","person5")
                ACCUM s.addTags("public");
        
          # person6 and person7 will be tagged as public and vip.
          vSet = SELECT s
                FROM Seed:s
                WHERE s.id IN ("person6","person7")
                ACCUM s.addTags("vip", "public");
        
          # person8 will be tagged as vip
          vSet = SELECT s
                FROM Seed:s
                WHERE s.id == "person8"
                ACCUM s.addTags("vip");
        }
      `
    )
  },
  {
    label: 'differenceTags()',
    detail: 'v.differenceTags( v2 )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the difference in tags between the vertex and another vertex as a set.

      - Return type
        SET<STRING>

      - Parameters
        Parameter: v2
        Description: A vertex
        Data type: VERTEX

      - Example:
        // return the difference set of tags between two vertices
        CREATE QUERY exampleDifferencetags() {
          SetAccum<string> @vAcc;
          vSet = { any };
          vSet = SELECT s
                FROM vSet:s -(_)- :t
                WHERE t.type == "person"
                ACCUM s.@vAcc += s.differenceTags(t);
          PRINT vSet[vSet.@vAcc];
        }
      `
    )
  },
  {
    label: 'getTags()',
    detail: 'v.getTags()',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the vertex's tags as a set. If the vertex has no tags or is untaggable, it returns an empty set.

      - Return type
        SET<STRING>

      - Parameters
        None.

      - Example:
        //print the tags of each vertices, in 2 different ways.
        CREATE QUERY exampleGettags() {
          SetAccum<string> @vAcc;
          vSet = { any };
          vSet = SELECT s
                FROM vSet:s
                ACCUM s.@vAcc += s.getTags();
          PRINT vSet[vSet.@vAcc];
          PRINT vSet[vSet.gettags()];
        }
      `
    )
  },
  {
    label: 'hasTags()',
    detail: 'hasTags( tag1, tag2, ..., tagN )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns true if the vertex has every tag provided in the argument list and returns false if it does not.

      - Return type
        BOOL

      - Parameters
        Parameter: tagN
        Description: A string.
        Data type: STRING

      - Example:
        USE GRAPH socialNet
        CREATE QUERY findVertexWithTag(STRING tag) {
          seed = { ANY };
          res =
            SELECT v
            FROM seed:v
            WHERE v.hasTags(tag)
            ORDER BY v.id;
          PRINT res WITH TAGS;
        }
        INSTALL QUERY findVertexWithTag
        RUN QUERY findVertexWithTag("vip")
        The output of the query would be:
          {
            "error": false,
            "message": "",
            "version": {
              "schema": 2,
              "edition": "enterprise",
              "api": "v2"
            },
            "results": [{"res": [
              {
                "v_id": "person6",
                "attributes": {
                  "gender": "Male",
                  "id": "person6",
                  "res.gettags()": [
                    "vip",
                    "public"
                  ]
                },
                "v_type": "person"
              },
              {
                "v_id": "person7",
                "attributes": {
                  "gender": "Male",
                  "id": "person7",
                  "res.gettags()": [
                    "vip",
                    "public"
                  ]
                },
                "v_type": "person"
              },
              {
                "v_id": "person8",
                "attributes": {
                  "gender": "Male",
                  "id": "person8",
                  "res.gettags()": ["vip"]
                },
                "v_type": "person"
              }
            ]}]
          }
      `
    )
  },
  {
    label: 'isTaggable()',
    detail: 'v.isTaggable()',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns true if the vertex is taggable.

      - Return type
        BOOL

      - Parameters
        None

      - Example:
        //count the number of taggable vertices in the graph.
        CREATE QUERY countIstaggable() for graph poc_graph_tag {
          SumAccum<int> @@count;
          vSet = { any };
          vSet = SELECT s
                FROM vSet:s
                WHERE s.isTaggable()
                ACCUM @@count += 1;
          PRINT @@count;
        }
      `
    )
  },
  {
    label: 'intersectTags()',
    detail: 'v.intersectTags( v2 )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Returns the common tags between the vertex and another vertex as a set.

      - Return type
        SET<STRING>

      - Parameters
        None

      - Example:
        //return the intersect set of tags between two vertices.
        CREATE QUERY exampleIntersecttags() {
          SetAccum<string> @vAcc;
          vSet = { any };
          vSet = SELECT s
                FROM vSet:s -(_)- :t
                WHERE t.type == "person"
                ACCUM s.@vAcc += s.intersectTags(t);
          PRINT vSet[vSet.@vAcc];
        }
      `
    )
  },
  {
    label: 'removeAllTags()',
    detail: 'v.removeAllTags()',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Removes all tags from the vertex.

      - Return type
        No return value.

      - Parameters
        None

      - Example:
        //remove all tags from all person vertices.
        CREATE QUERY removealltagsFromPerson() {
          vSet = { person.* };
          # remove all tags from all person vertices
          vSet = SELECT s
                FROM vSet:s
                ACCUM s.removeAllTags();
        }
      `
    )
  },
  {
    label: 'removeTags()',
    detail: 'v.removeTags( tag1, tag2, ..., tagN )',
    documentation: new vscode.MarkdownString(
      `
      - Description
        Removes the tags provided in the argument list from the vertex.

      - Return type
        No return value.

      - Parameters
        Parameter: tagN
        Description: A string value
        Data type: STRING

      - Example:
        //remove tag “vip” and “public” from all person vertices.
        CREATE QUERY removetagsFromPerson() {
          vSet = { person.* };
          # remove tag vip and public from all person vertices
          vSet = SELECT s
                FROM vSet:s
                ACCUM s.removeTags("vip", "public");
        }
      `
    )
  }
];