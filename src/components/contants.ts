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
  }
];