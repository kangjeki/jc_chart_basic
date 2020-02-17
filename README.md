# jc_chart_basic
Simple Chart SVG

<img src="chart.png" style="width: 500px;">

# Use
Function and Target ID

    JC_Chart('chart_id_target',
      {
        title		: "Chart Standard", 
        subtitle	: "Periode Apa Aja Boleh"
      },
      {
        "Jakarta"	: 460, 
        "Bandung"	: 34, 
        "Surabaya"	: 250, 
        "Semarang"	: 80, 
        "Tangerang"	: 275, 
        "Medan"		: 280, 
        "Manado"	: 130, 
        "Bekasi"	: 20
      });
      
# Full Example
    <!DOCTYPE html>
    <html>
    <head>
      <title>JC Chart</title>
      <script type="text/javascript" src="js/basic_chart.js"></script>
    </head>
    <body>

    <div id="chart_id_target" style="width: 100%; height: 350px; position: relative;"></div>

    <script type="text/javascript">
      JC_Chart('chart_id_target',
      {
        title		: "Chart Standard", 
        subtitle	: "Periode Apa Aja Boleh"
      },
      {
        "Jakarta"	: 460, 
        "Bandung"	: 34, 
        "Surabaya"	: 250, 
        "Semarang"	: 80, 
        "Tangerang"	: 275, 
        "Medan"		: 280, 
        "Manado"	: 130, 
        "Bekasi"	: 20
      });
    </script>

    </body>
    </html>
