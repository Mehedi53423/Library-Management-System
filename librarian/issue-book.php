<?php

require_once 'header.php';

?>
                <!-- content HEADER -->
                <!-- ========================================================= -->
                <div class="content-header">
                    <!-- leftside content header -->
                    <div class="leftside-content-header">
                        <ul class="breadcrumbs">
                            <li><i class="fa fa-home" aria-hidden="true"></i><a href="#">Dashboard</a></li>
                            <li><a href="javascript:avoid(0)">Issue Book</a></li>
                        </ul>
                    </div>
                </div>
                <!-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
                <div class="row animated fadeInUp">
                    <div class="col-sm-6 col-sm-offset-3">
                        <div class="panel">
                        <div class="panel-content">
                            <div class="row">
                                <div class="col-md-12">
                                    <form class="form-inline" method="POST" action=""> 
                                        <div class="form-group">
                                        <select class="form-control" name="student_id">
                                            <option value="">Select</option>
                                            <?php
                                                $result = mysqli_query($con, query: "SELECT * FROM `students`");
                                                while ($row = mysqli_fetch_assoc($result)){
                                                    ?>
                                                    <option value="<?= $row['id'] ?>"><?= ucwords($row['fname'].' '.$row['lname']) .' - ('. $row['roll'] . ')' ?></option>
                                                    <?php
                                                }
                                            ?>
                                        </select>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" name="search" class="btn btn-primary">Search</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <?php

                            if(isset($_POST['search'])){
                                $id = $_POST['student_id'];
                                //$result = mysqli_query($con, query: "SELECT * FROM `students` WHERE `id` = `1` AND `status` = `1`");
                                $row = mysqli_fetch_assoc($result);
                            }

                            ?>
                        </div>
                    </div>
                    </div>
                </div>

<?php

require_once 'footer.php';

?>