# Solution
this is the solution to the question asked =>


function solution(D) { Il code

that, given a dictionary D where key is of form YYYY-MM-DD and its corresponding value is an integer, returns a new dictionary D such that:

1) it's key (type: String) is a Day: [Mon, Tue, Wed, Thu, Fri, Sat, Sun]

2) and corresponding value (type: INT) is sum of values on that day

Example:

Input-D=(2020-01-01:4, 2020-01-02: 4, 2020-01-03: 6, 2020-01-04:8, 2020-01-05:2, 2020-01-06--6, 2020-01-07:2, 2020-01-06:-2)

Output-D=("Mon: -6, Tue: 2, Wed: 2, Thu: 4, Fri: 6, Sar: 8, 'Sun:2)

3) Also, if Input Dictionary don't have particular day then Output Dictionary will have value

of that day as the mean of Prev and Next Day

Example

Input Dictionary don't have Thu & Fri

Input-D=(2020-01-01:6, 2020-01-04: 12/2020-01-05: 14,2020-01-06:2, 2020-01-07-4)

Output Dictionary

Output-D (Mon: 2, Tue: 4, "Wed: 6, Thu: 8, Fri: 10, "Sat: 12, 'Sun': 14)
