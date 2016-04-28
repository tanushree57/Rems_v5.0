<header class="header fixed-top clearfix">
    <!--logo start-->
    <div class="brand">
        <a href="index.php" class="logo">
            <img src="<?php base_url(); ?>/rems/images/logo.png" alt="">
        </a>

        <div class="sidebar-toggle-box">
            <div class="fa fa-bars"></div>
        </div>
    </div>
    <!--logo end-->

    <div class="nav notify-row" id="top_menu">
        <!--  notification start -->

        <!--  notification end -->
    </div>
    <div class="top-nav clearfix">
        <!--search & user info start-->
        <ul class="nav pull-right top-menu">

            <!-- user login dropdown start-->
            <li class="dropdown">
                <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                    <img alt="" src="<?php base_url(); ?>/rems/images/avatar1_small.jpg">
                    <span class="username">John Snow</span>
                    <b class="caret"></b>
                </a>
                <ul class="dropdown-menu extended logout">
                    <li><a href="#"><i class=" fa fa-suitcase"></i>Profile</a></li>
                    <li><a href="#"><i class="fa fa-cog"></i> Settings</a></li>
                    <li><a href="logout.php"><i class="fa fa-key"></i> Log Out</a></li>
                </ul>
            </li>
            <!-- user login dropdown end -->

        </ul>
        <!--search & user info end-->
    </div>
</header>
<!--header end-->
<?php
//getting page name
/*$pagnme = basename($_SERVER['PHP_SELF']);
$true_class = "class=\"active\"";
*/
?>
<aside>
    <div id="sidebar" class="nav-collapse">
        <!-- sidebar menu start-->
        <div class="leftside-navigation">
            <ul class="sidebar-menu" id="nav-accordion">
                <li>
                    <a href="index" <?php /* if ($pagnme == "index.php") echo $true_class;*/ ?>>
                        <i class="fa fa-dashboard"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li class="sub-menu">
                    <a href="javascript:;" <?php // if ($pagnme == "admin_state_add.php" || $pagnme == "admin_state_update.php") echo $true_class; ?>>
                        <i class="fa fa-user"></i>
                        <span>State </span>
                    </a>
                    <ul class="sub">
                        <li <?php //if ($pagnme == "admin_state_add.php") echo $true_class; ?>><a
                                href="admin_state_add.php">Add State</a></li>
                    </ul>

                    <ul class="sub">
                        <li <?php //if ($pagnme == "admin_state_update.php") echo $true_class; ?>><a
                                href="admin_state_update.php">Update State</a></li>
                    </ul>
                </li>

                <li class="sub-menu">
                    <a href="javascript:;" <?php // if ($pagnme == "admin_district_add.php" || $pagnme == "admin_district_update.php") echo $true_class; ?>>
                        <i class="fa fa-user"></i>
                        <span>District </span>
                    </a>
                    <ul class="sub">
                        <li <?php // if ($pagnme == "admin_district_add.php") echo $true_class; ?>><a
                                href="admin_district_add.php">Add District</a></li>
                    </ul>

                    <ul class="sub">
                        <li <?php // if ($pagnme == "admin_district_update.php") echo $true_class; ?>><a
                                href="admin_district_update.php">Update District</a></li>
                    </ul>
                </li>

                <li class="sub-menu">
                    <a href="javascript:;" <?php // if ($pagnme == "admin_taluka_add.php" || $pagnme == "admin_taluka_update.php") echo $true_class; ?>>
                        <i class="fa fa-user"></i>
                        <span>Taluka </span>
                    </a>
                    <ul class="sub">
                        <li <?php // if ($pagnme == "admin_taluka_add.php") echo $true_class; ?>><a
                                href="admin_taluka_add.php">Add Taluka</a></li>
                    </ul>

                    <ul class="sub">
                        <li <?php //if ($pagnme == "admin_taluka_update.php") echo $true_class; ?>><a
                                href="admin_taluka_update.php">Update Taluka</a></li>
                    </ul>
                </li>

                <li class="sub-menu">
                    <a href="javascript:;" <?php //if ($pagnme == "admin_project_add.php" || $pagnme == "admin_project_update.php") echo $true_class; ?>>
                        <i class="fa fa-user"></i>
                        <span>Project </span>
                    </a>
                    <ul class="sub">
                        <li <?php // if ($pagnme == "admin_project_add.php") echo $true_class; ?>><a
                                href="admin_project_add.php">Add Project</a></li>
                    </ul>

                    <ul class="sub">
                        <li <?php // if ($pagnme == "admin_project_update.php") echo $true_class; ?>><a
                                href="admin_project_update.php">Update Project</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- sidebar menu end-->
    </div>
</aside>
