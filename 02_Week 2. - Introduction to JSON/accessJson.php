<?php
$people_json = file_get_contents('people.json');
$decoded_json = json_decode($people_json, false);
echo $decoded_json->student->name;
echo $decoded_json->student->email;
echo $decoded_json->student->age;
?>