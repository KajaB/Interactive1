<link rel="stylesheet" type="text/css" href="styles.css">

<script src="client.js" defer type="text/javascript"></script>
</head>

<body>
<h1>Welcome</h1>
<p>submit comment below</p>




<form action="index.php" method="post">
<input type="submit" value="Submit">
<textarea rows="4" cols="50" name="comment" form="comment">Enter text here...</textarea>
</form>
</body>
</html>


<?php

    if($_POST['submit']){
      print "<h1>your comment has been submitted<h1>";

      $name = $_POST['name'];
      $comment = $_POST['comment'];

      #Get old comments
      $old = fopen("comments.txt", "r+t");
      $old_comments = fread($old, 1024);

      #delete everything, write down new and old $old_comments
      $write = fopen("comments.txt", "w+");
      $string = "<b>" .$name. "</b><br>" .$comment. "<br>\n" .$old_comments;
      fwrite($write, $string);
      fclose($write);
      fclose($old);
    }

    #read $old_comments
    $read = fopen("comments.txt", "r+t");
    echo "<br><br>comments<hr>" .fread($read, 1024);
    fclose($read);
?>
