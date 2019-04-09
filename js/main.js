const lottieFiles = [{ name: "Cart_Build", id: "icon-1"},{ name: "Edit_Build", id: "icon-2"},{ name: "Folder_Build", id: "icon-3"},{ name: "Garbage_Build", id: "icon-4"},{ name: "Heart_Build", id: "icon-5"},{ name: "Home_Build", id: "icon-6"},{ name: "Laptop_Build", id: "icon-7"},{ name: "Printer_Build", id: "icon-8"},{ name: "Redo_Build", id: "icon-9"},{ name: "Repeat_Build", id: "icon-10"},{ name: "Cart_Build copy", id: "icon-11"},{ name: "Edit_Build copy", id: "icon-12"},{ name: "Folder_Build copy", id: "icon-13"},{ name: "Garbage_Build copy", id: "icon-14"},{ name: "Heart_Build copy", id: "icon-15"},{ name: "Home_Build copy", id: "icon-16"},{ name: "Laptop_Build copy", id: "icon-17"},{ name: "Printer_Build copy", id: "icon-18"},{ name: "Redo_Build copy", id: "icon-19"},{ name: "Repeat_Build copy", id: "icon-20"},{ name: "Cart_Build copy 2", id: "icon-21"},{ name: "Edit_Build copy 2", id: "icon-22"},{ name: "Folder_Build copy 2", id: "icon-23"},{ name: "Garbage_Build copy 2", id: "icon-24"},{ name: "Heart_Build copy 2", id: "icon-25"},{ name: "Home_Build copy 2", id: "icon-26"},{ name: "Laptop_Build copy 2", id: "icon-27"},{ name: "Printer_Build copy 2", id: "icon-28"},{ name: "Redo_Build copy 2", id: "icon-29"},{ name: "Repeat_Build copy 2", id: "icon-30"},{ name: "Cart_Build copy 3", id: "icon-31"},{ name: "Edit_Build copy 3", id: "icon-32"},{ name: "Folder_Build copy 3", id: "icon-33"},{ name: "Garbage_Build copy 3", id: "icon-34"},{ name: "Heart_Build copy 3", id: "icon-35"},{ name: "Home_Build copy 3", id: "icon-36"},{ name: "Laptop_Build copy 3", id: "icon-37"},{ name: "Printer_Build copy 3", id: "icon-38"},{ name: "Redo_Build copy 3", id: "icon-39"},{ name: "Repeat_Build copy 3", id: "icon-40"},{ name: "Cart_Build copy 4", id: "icon-41"},{ name: "Edit_Build copy 4", id: "icon-42"},{ name: "Folder_Build copy 4", id: "icon-43"},{ name: "Garbage_Build copy 4", id: "icon-44"},{ name: "Heart_Build copy 4", id: "icon-45"},{ name: "Home_Build copy 4", id: "icon-46"},{ name: "Laptop_Build copy 4", id: "icon-47"},{ name: "Printer_Build copy 4", id: "icon-48"},{ name: "Redo_Build copy 4", id: "icon-49"},{ name: "Repeat_Build copy 4", id: "icon-50"},{ name: "Cart_Build copy 5", id: "icon-51"},{ name: "Edit_Build copy 5", id: "icon-52"},{ name: "Folder_Build copy 5", id: "icon-53"},{ name: "Garbage_Build copy 5", id: "icon-54"},{ name: "Heart_Build copy 5", id: "icon-55"},{ name: "Home_Build copy 5", id: "icon-56"},{ name: "Laptop_Build copy 5", id: "icon-57"},{ name: "Printer_Build copy 5", id: "icon-58"},{ name: "Redo_Build copy 5", id: "icon-59"},{ name: "Repeat_Build copy 5", id: "icon-60"},{ name: "Cart_Build copy 6", id: "icon-61"},{ name: "Edit_Build copy 6", id: "icon-62"},{ name: "Folder_Build copy 6", id: "icon-63"},{ name: "Garbage_Build copy 6", id: "icon-64"},{ name: "Heart_Build copy 6", id: "icon-65"},{ name: "Home_Build copy 6", id: "icon-66"},{ name: "Laptop_Build copy 6", id: "icon-67"},{ name: "Printer_Build copy 6", id: "icon-68"},{ name: "Redo_Build copy 6", id: "icon-69"},{ name: "Repeat_Build copy 6", id: "icon-70"},{ name: "Cart_Build copy 7", id: "icon-71"},{ name: "Edit_Build copy 7", id: "icon-72"},{ name: "Folder_Build copy 7", id: "icon-73"},{ name: "Garbage_Build copy 7", id: "icon-74"},{ name: "Heart_Build copy 7", id: "icon-75"},{ name: "Home_Build copy 7", id: "icon-76"},{ name: "Laptop_Build copy 7", id: "icon-77"},{ name: "Printer_Build copy 7", id: "icon-78"},{ name: "Redo_Build copy 7", id: "icon-79"},{ name: "Repeat_Build copy 7", id: "icon-80"},{ name: "Cart_Build copy 8", id: "icon-81"},{ name: "Edit_Build copy 8", id: "icon-82"},{ name: "Folder_Build copy 8", id: "icon-83"},{ name: "Garbage_Build copy 8", id: "icon-84"},{ name: "Heart_Build copy 8", id: "icon-85"},{ name: "Home_Build copy 8", id: "icon-86"},{ name: "Laptop_Build copy 8", id: "icon-87"},{ name: "Printer_Build copy 8", id: "icon-88"},{ name: "Redo_Build copy 8", id: "icon-89"},{ name: "Repeat_Build copy 8", id: "icon-90"},{ name: "Cart_Build copy 9", id: "icon-91"},{ name: "Edit_Build copy 9", id: "icon-92"},{ name: "Folder_Build copy 9", id: "icon-93"},{ name: "Garbage_Build copy 9", id: "icon-94"},{ name: "Heart_Build copy 9", id: "icon-95"},{ name: "Home_Build copy 9", id: "icon-96"},{ name: "Laptop_Build copy 9", id: "icon-97"},{ name: "Printer_Build copy 9", id: "icon-98"},{ name: "Redo_Build copy 9", id: "icon-99"},{ name: "Repeat_Build copy 9", id: "icon-100"}]
const gridJson = {name: "Test_Grid", id: "grid-container"};
const browserJSON = [];

function playFile(file) {
  let animation = lottie.loadAnimation({
    container: document.getElementById('lottie-player'),
    path: `json/${file.name}.json`,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    name: `${file.name} Animation`,
  });
}

function setName(file) {
  $(`#${file.id}`).attr(`data-name`, `${file.name}`);
}

function createJSON(file) {
  $.getJSON(`json/${file.name}.json`, function(obj) {
    browserJSON.push(obj);
    return obj;
  });

}


function editJSON(file, lottieColor, scaleStrokeDuration) {
    file.op = 30;

    let $scale = scaleStrokeDuration[0],
    $stroke = (scaleStrokeDuration[1].replace("pt",""))*20,
    $height,
    $width,
    $color = lottieColor,
    $duration = scaleStrokeDuration[2].replace("ms",""),
    $framerate = (file.op/$duration)*1000;

    file.fr = $framerate.toFixed(2);

    // file.h = $height;
    // file.w = $width;

    // Current JSON paths:
    switch (file.nm) {
      case "Cart_Build_03":
          file.layers[1].shapes[0].it[1].c.k = $color;
          file.layers[1].shapes[1].it[1].c.k = $color;
          file.layers[1].shapes[2].it[1].c.k = $color;
          file.layers[1].shapes[3].it[1].c.k = $color;
          file.layers[1].shapes[7].w.k = $stroke;
          // debugger;
        break;
      case "Edit_Build_02":
          file.layers[2].shapes[0].it[1].c.k = $color;
          file.layers[3].shapes[0].it[1].c.k = $color;
          file.layers[4].shapes[0].it[1].c.k = $color;
          file.layers[5].shapes[0].it[1].c.k = $color;
          file.layers[6].shapes[0].it[1].c.k = $color;
          file.layers[2].shapes[0].it[1].w.k = $stroke;
          file.layers[3].shapes[0].it[1].w.k = $stroke;
          file.layers[4].shapes[0].it[1].w.k = $stroke;
          file.layers[5].shapes[0].it[1].w.k = $stroke;
          file.layers[6].shapes[0].it[1].w.k = $stroke;
          // debugger;
        break;
      case "Folder_Build_03":
          file.layers[1].shapes[1].c.k = $color;
          file.layers[2].shapes[1].c.k = $color;
          file.layers[1].shapes[1].w.k = $stroke;
          file.layers[2].shapes[1].w.k = $stroke;
          // debugger;
        break;
      case "Garbage_Build_05":
          file.layers[1].shapes[0].it[1].c.k = $color;
          file.layers[1].shapes[1].it[1].c.k = $color;
          file.layers[1].shapes[2].it[1].c.k = $color;
          file.layers[1].shapes[3].it[1].c.k = $color;
          file.layers[1].shapes[0].it[1].w.k = $stroke;
          file.layers[1].shapes[1].it[1].w.k = $stroke;
          file.layers[1].shapes[2].it[1].w.k = $stroke;
          file.layers[1].shapes[3].it[1].w.k = $stroke;
          // debugger;
        break;
      case "Heart_Build_03":
          file.layers[1].shapes[1].c.k = $color;
          file.layers[1].shapes[1].w.k = $stroke;
          // debugger;
        break;
      case "Home_Build_06":
          file.layers[1].shapes[0].it[1].c.k = $color;
          file.layers[2].shapes[0].it[1].c.k = $color;
          file.layers[3].shapes[0].it[1].c.k = $color;
          file.layers[4].shapes[0].it[1].c.k = $color;
          file.layers[5].shapes[0].it[1].c.k = $color;
          file.layers[1].shapes[0].it[1].w.k = $stroke;
          file.layers[2].shapes[0].it[1].w.k = $stroke;
          file.layers[3].shapes[0].it[1].w.k = $stroke;
          file.layers[4].shapes[0].it[1].w.k = $stroke;
          file.layers[5].shapes[0].it[1].w.k = $stroke;
          // debugger;
        break;
      case "Laptop_Build_04":
          file.layers[2].shapes[0].it[1].c.k = $color;
          file.layers[2].shapes[1].it[1].c.k = $color;
          file.layers[3].shapes[0].it[1].c.k = $color;
          file.layers[3].shapes[1].it[1].c.k = $color;
          file.layers[3].shapes[0].it[1].c.k = $color;
          file.layers[3].shapes[1].it[1].c.k = $color;
          file.layers[2].shapes[0].it[1].w.k = $stroke;
          file.layers[2].shapes[1].it[1].w.k = $stroke;
          file.layers[3].shapes[0].it[1].w.k = $stroke;
          file.layers[3].shapes[1].it[1].w.k = $stroke;
          file.layers[3].shapes[0].it[1].w.k = $stroke;
          file.layers[3].shapes[1].it[1].w.k = $stroke;
          // debugger;
        break;
      case "Printer_Build_02":
          file.layers[2].shapes[1].c.k = $color;
          file.layers[4].shapes[0].it[1].c.k = $color;
          file.layers[5].shapes[0].it[1].c.k = $color;
          file.layers[6].shapes[0].it[1].c.k = $color;
          file.layers[2].shapes[1].w.k = $stroke;
          file.layers[4].shapes[0].it[1].w.k = $stroke;
          file.layers[5].shapes[0].it[1].w.k = $stroke;
          file.layers[6].shapes[0].it[1].w.k = $stroke;
          // debugger;
        break;
      case "Redo_Build_02":
          file.layers[2].shapes[0].it[1].c.k = $color;
          file.layers[3].shapes[0].it[1].c.k = $color;
          file.layers[2].shapes[0].it[1].w.k = $stroke;
          file.layers[3].shapes[0].it[1].w.k = $stroke;
          // debugger;
        break;
      case "Repeat_Build_02":
          file.layers[1].shapes[0].it[1].c.k = $color;
          file.layers[3].shapes[0].it[1].c.k = $color;
          file.layers[4].shapes[0].it[1].c.k = $color;
          file.layers[5].shapes[0].it[1].c.k = $color;
          file.layers[7].shapes[0].it[1].c.k = $color;
          file.layers[8].shapes[0].it[1].c.k = $color;
          file.layers[9].shapes[0].it[1].c.k = $color;
          file.layers[1].shapes[0].it[1].w.k = $stroke;
          file.layers[3].shapes[0].it[1].w.k = $stroke;
          file.layers[4].shapes[0].it[1].w.k = $stroke;
          file.layers[5].shapes[0].it[1].w.k = $stroke;
          file.layers[7].shapes[0].it[1].w.k = $stroke;
          file.layers[8].shapes[0].it[1].w.k = $stroke;
          file.layers[9].shapes[0].it[1].w.k = $stroke;
          // debugger;
        break;

      default:

    }

}



function setColor() {
  let $hue = $("#hueID").val(),
  $saturation = $("#saturationID").val(),
  $lightness = $("#lightnessID").val();

  let $hsl = `hsl(${$hue}, ${$saturation}%, ${$lightness}%)`;

  function hslToRgb(h,s,l) {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c/2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return "rgb(" + r + "," + g + "," + b + ")";
  }

  function rgbatolottie(h,s,l){
    // Must be fractions of 1
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c/2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    let lottieR = (r/255).toFixed(2);
    let lottieG = (g/255).toFixed(2);
    let lottieB = (b/255).toFixed(2);

    return `[${lottieR},${lottieG},${lottieB}, 1]`;

  }

  function hslToHex(h,s,l) {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c/2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    // Having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);

    // Prepend 0s, if necessary
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;

    return "#" + r + g + b;
  }

  let $lottieColor = rgbatolottie($hue, $saturation, $lightness),
  // $colorrgba = hslToRgb($hue,$saturation,$lightness),
  // $colorhex = hslToHex($hue,$saturation,$lightness),
  $fill = $(".fill"),
  $stroke = $(".stroke"),
  $saturationBar = $("#visibleSaturation"),
  $lightnessBar = $("#visibleLightness");

  // $(".rgb-display").text($colorrgba);
  // $(".hex-display").text($colorhex);
  // $(".hsl-display").text($hsl);

  $fill.add($stroke).css({stroke: `${$hsl}`, fill: `${$hsl}`})
  $saturationBar.css(`background`, `linear-gradient(to right, hsl(${$hue}, 10%, 0%), hsl(${$hue}, 20%, 50%), hsl(${$hue}, 30%, 50%), hsl(${$hue}, 40%, 50%), hsl(${$hue}, 50%, 50%), hsl(${$hue}, 60%, 50%), hsl(${$hue}, 70%, 50%), hsl(${$hue}, 80%, 50%), hsl(${$hue}, 90%, 50%), hsl(${$hue}, 100%, 50%))`);
  $lightnessBar.css(`background`, `linear-gradient(to right, hsl(${$hue}, 100%, 0%), hsl(${$hue}, 100%, 20%), hsl(${$hue}, 100%, 30%), hsl(${$hue}, 100%, 40%), hsl(${$hue}, 100%, 50%), hsl(${$hue}, 100%, 60%), hsl(${$hue}, 100%, 70%), hsl(${$hue}, 100%, 80%),hsl(${$hue}, 100%, 90%), hsl(${$hue}, 100%, 100%))`);

  return $lottieColor;

}

function setScaleStrokeDuration() {
  let $scale = `${$("#scale").val()}px`,
  $maxstroke = (($("#scale").val()) / 12).toFixed(2);
  $maxscale = (($("#stroke").val()) * 12),
  $stroke = `${$("#stroke").val()}pt`,
  $duration = `${$("#duration").val()}ms`;;

  if ($("#scale").val() < $("#stroke").val() * 11.99) {
    // debugger;
    $("#scale").val($maxscale);

    // debugger;
  }
  if ($("#stroke").val() > $("#scale").val() / 11.99) {
    // debugger;
    $(`#stroke`).val($maxstroke);
    // debugger;
  }


  console.log(`the scale value is ${$("#scale").val()}`);
  console.log(`the stroke value is ${$("#stroke").val()}`);
  console.log('-------------------------------------')


  return [$scale, $stroke, $duration]

}

$('input').on('input', function() {
  let lottieColor = setColor(),
  scaleStrokeDuration = setScaleStrokeDuration();

  browserJSON.forEach(function(file) {
    editJSON(file, lottieColor, scaleStrokeDuration);
  });
});

$(document).ready(function() {

  lottieFiles.forEach(setName);
  lottieFiles.forEach(createJSON);
  playFile(gridJson)

  $(".icon").click(function(event) {

    let iconID = event.currentTarget.id;

    function playFilePreview(div) {
      if (div.id == iconID) {
        $("#preview").empty();

        let animation = bodymovin.loadAnimation({
          container: document.getElementById("preview"),
          path: `json/${div.name}.json`,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          name: `${div.name} Preview`,
        })
      }

      // Return a promise here, will allow .then(setColor()) function to run after and apply itself to the svg
    }
    lottieFiles.find(playFilePreview);
  })

})
