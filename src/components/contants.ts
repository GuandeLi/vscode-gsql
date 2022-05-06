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
    documentation: `
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
  },
  {
    label: 'count()',
    detail: 'count( [DISTINCT] setExp )',
    documentation: `
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
  },
  {
    label: 'max()',
    detail: 'max( [DISTINCT] setExp )',
    documentation: `
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
  },
  {
    label: 'min()',
    detail: 'min( [DISTINCT] setExp )',
    documentation: `
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
  },
  {
    label: 'sum()',
    detail: 'sum( [DISTINCT] setExp )',
    documentation: `
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
  },
  {
    label: 'datetime_add()',
    detail: 'datetime_add( date, INTERVAL int_value time_unit )',
    documentation: `
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
  },
  {
    label: 'datetime_diff()',
    detail: 'datetime_diff( date1, date2 )',
    documentation: `
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
  },
  {
    label: 'datetime_format()',
    detail: 'datetime_format(date[, str])',
    documentation: `
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
  },
  {
    label: 'datetime_sub( )',
    detail: 'datetime_sub(date, INTERVAL int_value time_unit)',
    documentation: `
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
  },
  {
    label: 'datetime_to_epoch()',
    detail: 'datetime_to_epoch( date )',
    documentation: `
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
  },
  {
    label: 'day()',
    detail: 'day( date )',
    documentation: `
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
  },
  {
    label: 'epoch_to_datetime()',
    detail: 'epoch_to_datetime(int_value)',
    documentation: `
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
  },
  {
    label: 'hour()',
    detail: 'hour(date)',
    documentation: `
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
  },
  {
    label: 'minute()',
    detail: 'minute(date)',
    documentation: `
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
  },
  {
    label: 'month()',
    detail: 'month(date)',
    documentation: `
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
  },
  {
    label: 'now()',
    detail: 'now()',
    documentation: `
    - Description
      Returns the current UTC time in DATETIME.

    - Return type
      DATETIME

    - Parameters
      None.

    - Example
      now() => "2021-11-13 00:32:16"
    `
  },
  {
    label: 'second()',
    detail: 'second(date)',
    documentation: `
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
  },
  {
    label: 'year()',
    detail: 'year(date)',
    documentation: `
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
  },
  {
    label: 'abs()',
    detail: 'abs( num )',
    documentation: `
    - Description
      Returns the absolute value of a number.

    - Return type
      Number

    - Parameters
      Parameter: num
      Description: The number to return the absolute value for
      Data type: Number
    `
  },
  {
    label: 'ceil()',
    detail: 'ceil(num)',
    documentation: `
    - Description
      Rounds a number up to the smallest integer that's greater than or equal to the number.

    - Return type
      INT

    - Parameters
      Parameter: num
      Description: The number to round up from
      Data type: Number
    `
  },
  {
    label: 'exp()',
    detail: 'exp(num)',
    documentation: `
    - Description
      Returns the base-e exponential of a number.

    - Return type
      FLOAT

    - Parameters
      Parameter: num
      Description: The exponent
      Data type: Number
    `
  },
  {
    label: 'float_to_int()',
    detail: 'float_to_int (num)',
    documentation: `
    - Description
      Converts a floating-point number to an integer by truncating the floating part.

    - Return type
      INT

    - Parameters
      Parameter: num
      Description: The floating-point number to convert to integer
      Data type: FLOAT
    `
  },
  {
    label: 'floor()',
    detail: 'floor(num)',
    documentation: `
    - Description
      Rounds a number down to the biggest integer that is smaller than or equal to the number.

    - Return type
      INT

    - Parameters
      Parameter: num
      Description: The number to round down from
      Data type: Number
    `
  },
  {
    label: 'fmod()',
    detail: 'fmod(numer, denom)',
    documentation: `
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
  },
  {
    label: 'ldexp()',
    detail: 'ldexp(x, exp)',
    documentation: `
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
  },
  {
    label: 'PI()',
    detail: 'PI()',
    documentation: `
    - Description
      Returns the value of π.

    - Return type
      DOUBLE

    - Parameters
      None.

    - Example
      PI() * 1000000000 -> 3.141592653589793E9
    `
  },
  {
    label: 'pow()',
    detail: 'pow(base, exp)',
    documentation: `
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
  },
  {
    label: 'rand()',
    detail: 'rand( [seed] )',
    documentation: `
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
  },
  {
    label: 'round()',
    detail: 'round ( num[, integer] )',
    documentation: `
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
  },
  {
    label: 'sign()',
    detail: 'sign( num )',
    documentation: `
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
  },
  {
    label: 'square()',
    detail: 'square( num )',
    documentation: `
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
  },
  {
    label: 'sqrt()',
    detail: 'sqrt(num)',
    documentation: `
    - Description
      Returns the square root of a number

    - Return type
      FLOAT

    - Parameters
      Parameter: num
      Description: The number to get square root for.
      Data type: Number
    `
  },
  {
    label: 'trunc()',
    detail: 'trunc( num, [decimal_place] )',
    documentation: `
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
  },
  {
    label: 'log()',
    detail: 'log(num)',
    documentation: `
    - Description
      Returns the natural logarithm of a number (base e).

    - Return type
      DOUBLE

    - Parameters
      Parameter: num
      Description: The number to compute natural logarithm for
      Data type: Number
    `
  },
  {
    label: 'log2()',
    detail: 'log2( num )',
    documentation: `
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
  },
  {
    label: 'log10()',
    detail: 'log10(num)',
    documentation: `
    - Description
      Return the common logarithm of a number (base 10).

    - Return type
      FLOAT

    - Parameters
      Parameter: num
      Description: The number to compute common logarithm for
      Data type: Number
    `
  },
  {
    label: 'acos()',
    detail: 'acos(num)',
    documentation: `
    - Description
      Returns the arc cosine of a number.

    - Return type
      FLOAT

    - Parameters
      Parameter: num
      Description: The number to compute arccosine for
      Data type: Number
    `
  },
  {
    label: 'asin()',
    detail: 'asin(num)',
    documentation: `
    - Description
      Returns the arc sine of a number.

    - Return type
      FLOAT

    - Parameters
      Parameter: num
      Description: The number to compute arcsine for
      Data type: Number
    `
  },
  {
    label: 'atan()',
    detail: 'atan(num)',
    documentation: `
    - Description
      Returns the arctangent of a number.

    - Return type
      FLOAT

    - Parameters
      Parameter: num
      Description: The number to compute arctangent for
      Data type: Number
    `
  },
  {
    label: 'atan2()',
    detail: 'atan2(y, x)',
    documentation: `
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
  },
  {
    label: 'cos()',
    detail: 'cos(num)',
    documentation: `
    - Description
      Returns the cosine of a number.

    - Return type
      FLOAT

    - Parameters
      Parameter: num
      Description: The number to return cosine for
      Data type: Number
    `
  },
  {
    label: 'cosh()',
    detail: 'cosh(num)',
    documentation: `
    - Description
      Returns the hyperbolic cosine of a number.

    - Return type
      FLOAT

    - Parameters
      Parameter: num
      Description: The number to compute hyperbolic cosine for
      Data type: Number
    `
  },
  {
    label: 'cot()',
    detail: 'cot( num )',
    documentation: `
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
  },
  {
    label: 'degrees()',
    detail: 'degrees( num )',
    documentation: `
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
  },
  {
    label: 'radians()',
    detail: 'radians( num )',
    documentation: `
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
  },
  {
    label: 'sin()',
    detail: 'sin(num)',
    documentation: `
    - Description
      Returns the sine of a number.

    - Return type
      FLOAT

    - Parameters
      Parameter: num
      Description: The number to compute sine for
      Data type: INT, FLOAT, or DOUBLE
    `
  },
  {
    label: 'sinh()',
    detail: 'sinh(num)',
    documentation: `
    - Description
      Returns the hyperbolic sine of a number.

    - Return type
      FLOAT

    - Parameters
      Parameter: num
      Description: The number to compute hyperbolic sine for
      Data type: INT, FLOAT, or DOUBLE
    `
  },
  {
    label: 'tan()',
    detail: 'tan(num)',
    documentation: `
    - Description
      Returns the tangent of a number.

    - Return type
      FLOAT

    - Parameters
      Parameter: num
      Description: The number to compute tangent for
      Data type: Number
    `
  },
  {
    label: 'tanh()',
    detail: 'tanh(num)',
    documentation: `
    - Description
      Returns the hyperbolic tangent of a number.

    - Return type
      FLOAT

    - Parameters
      Parameter: num
      Description: The number to compute hyperbolic tangent for
      Data type: Number
    `
  },
  {
    label: 'coalesce()',
    detail: 'coalesce( exp [, exp ...] )',
    documentation: `
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
  },
  {
    label: 'evaluate()',
    detail: 'evaluate( expressionStr, typeStr )',
    documentation: `
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
  },
];