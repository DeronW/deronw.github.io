-- # Write your MySQL query statement below
select id, move, description from cinema where id % 2 != 0 and description != '' order by rating;