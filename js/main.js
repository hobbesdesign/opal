const lottieFiles = [{ name: "Alarm_Clock_Build", id: "icon-1"},{ name: "Attach_Build", id: "icon-2"},{ name: "Audio_Build", id: "icon-3"},{ name: "Bookmark_Build", id: "icon-4"},{ name: "Calendar_Build", id: "icon-5"},{ name: "Camera_Build", id: "icon-6"},{ name: "Cart_Build_Add", id: "icon-7"},{ name: "Cart_Build", id: "icon-8"},{ name: "Cast_Build", id: "icon-9"},{ name: "Check_Build", id: "icon-10"},{ name: "Chevron_Down_Build", id: "icon-11"},{ name: "Chevron_Left_Build", id: "icon-12"},{ name: "Chevron_Right_Build", id: "icon-13"},{ name: "Chevron_Up_Build", id: "icon-14"},{ name: "Cloud_Build", id: "icon-15"},{ name: "DirectionalPad_Build", id: "icon-16"},{ name: "Document_Build", id: "icon-17"},{ name: "Dots_Horizontal_Build", id: "icon-18"},{ name: "Dots_Vertical_Build", id: "icon-19"},{ name: "Edit_Build", id: "icon-20"},{ name: "Eye_Build", id: "icon-21"},{ name: "Eye_Off_Build", id: "icon-22"},{ name: "Folder_Build", id: "icon-23"},{ name: "Garbage_Build", id: "icon-24"},{ name: "Heart_Build", id: "icon-25"},{ name: "Home_Build", id: "icon-26"},{ name: "Image_Add_Build", id: "icon-27"},{ name: "Image_Build", id: "icon-28"},{ name: "Info_Build", id: "icon-29"},{ name: "Laptop_Build", id: "icon-30"},{ name: "Link_Build", id: "icon-31"},{ name: "Mail_Build", id: "icon-32"},{ name: "Maximize_Build", id: "icon-33"},{ name: "Microphone_Build", id: "icon-34"},{ name: "Microphone_Off_Build", id: "icon-35"},{ name: "Minimize_Build", id: "icon-36"},{ name: "Pencil_Build", id: "icon-37"},{ name: "Printer_Build", id: "icon-38"},{ name: "Redo_Build", id: "icon-39"},{ name: "Repeat_Build", id: "icon-40"},{ name: "Alarm_Clock_Build copy", id: "icon-41"},{ name: "Attach_Build copy", id: "icon-42"},{ name: "Audio_Build copy", id: "icon-43"},{ name: "Bookmark_Build copy", id: "icon-44"},{ name: "Calendar_Build copy", id: "icon-45"},{ name: "Camera_Build copy", id: "icon-46"},{ name: "Cart_Build_Add copy", id: "icon-47"},{ name: "Cart_Build copy", id: "icon-48"},{ name: "Cast_Build copy", id: "icon-49"},{ name: "Check_Build copy", id: "icon-50"},{ name: "Chevron_Down_Build copy", id: "icon-51"},{ name: "Chevron_Left_Build copy", id: "icon-52"},{ name: "Chevron_Right_Build copy", id: "icon-53"},{ name: "Chevron_Up_Build copy", id: "icon-54"},{ name: "Cloud_Build copy", id: "icon-55"},{ name: "DirectionalPad_Build copy", id: "icon-56"},{ name: "Document_Build copy", id: "icon-57"},{ name: "Dots_Horizontal_Build copy", id: "icon-58"},{ name: "Dots_Vertical_Build copy", id: "icon-59"},{ name: "Edit_Build copy", id: "icon-60"},{ name: "Eye_Build copy", id: "icon-61"},{ name: "Eye_Off_Build copy", id: "icon-62"},{ name: "Folder_Build copy", id: "icon-63"},{ name: "Garbage_Build copy", id: "icon-64"},{ name: "Heart_Build copy", id: "icon-65"},{ name: "Home_Build copy", id: "icon-66"},{ name: "Image_Add_Build copy", id: "icon-67"},{ name: "Image_Build copy", id: "icon-68"},{ name: "Info_Build copy", id: "icon-69"},{ name: "Laptop_Build copy", id: "icon-70"},{ name: "Link_Build copy", id: "icon-71"},{ name: "Mail_Build copy", id: "icon-72"},{ name: "Maximize_Build copy", id: "icon-73"},{ name: "Microphone_Build copy", id: "icon-74"},{ name: "Microphone_Off_Build copy", id: "icon-75"},{ name: "Minimize_Build copy", id: "icon-76"},{ name: "Pencil_Build copy", id: "icon-77"},{ name: "Printer_Build copy", id: "icon-78"},{ name: "Redo_Build copy", id: "icon-79"},{ name: "Repeat_Build copy", id: "icon-80"},{ name: "Alarm_Clock_Build copy 2", id: "icon-81"},{ name: "Attach_Build copy 2", id: "icon-82"},{ name: "Audio_Build copy 2", id: "icon-83"},{ name: "Bookmark_Build copy 2", id: "icon-84"},{ name: "Calendar_Build copy 2", id: "icon-85"},{ name: "Camera_Build copy 2", id: "icon-86"},{ name: "Cart_Build_Add copy 2", id: "icon-87"},{ name: "Cart_Build copy 2", id: "icon-88"},{ name: "Cast_Build copy 2", id: "icon-89"},{ name: "Check_Build copy 2", id: "icon-90"},{ name: "Chevron_Down_Build copy 2", id: "icon-91"},{ name: "Chevron_Left_Build copy 2", id: "icon-92"},{ name: "Chevron_Right_Build copy 2", id: "icon-93"},{ name: "Chevron_Up_Build copy 2", id: "icon-94"},{ name: "Cloud_Build copy 2", id: "icon-95"},{ name: "DirectionalPad_Build copy 2", id: "icon-96"},{ name: "Document_Build copy 2", id: "icon-97"},{ name: "Dots_Horizontal_Build copy 2", id: "icon-98"},{ name: "Dots_Vertical_Build copy 2", id: "icon-99"},{ name: "Edit_Build copy 2", id: "icon-100"}]
const gridJson = {name: "Test_Grid", id: "grid-container"};
const browserJSON = [];
const exportJSON = [];

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

function makeObject(file) {
  $.getJSON(`json/${file.name}.json`, function(obj) {
    browserJSON.push(obj);
    return obj;
  });
}
function createJSON(file) {
  let json = JSON.stringify(file);
  exportJSON.push(json);
  return json;
}


function editJSON(file, lottieColor, scaleStrokeDuration) {
    file.op = 30;

    let $scale = scaleStrokeDuration[0],
    $stroke = (scaleStrokeDuration[1].replace("pt",""))*20,
    $height = parseInt(scaleStrokeDuration[0].replace("px","")),
    $outputheight = (($height/24)*100).toFixed(2),
    $jsonsize = [$outputheight, $outputheight, 100],
    $color = lottieColor,
    $duration = scaleStrokeDuration[2].replace("ms",""),
    $framerate = parseFloat(((file.op/$duration)*1000), 10);

    $framerate = Math.round($framerate * 1e2) / 1e2;

    file.fr = $framerate;
    file.layers[0].ks["s"].k = $jsonsize;
    file.h = $height;
    file.w = $height;

    // Current JSON paths:
    switch (file.nm) {
      case "Alarm_Clock_Build":
          file.layers[2].shapes[0].it[1].c.k = $color
          file.layers[2].shapes[0].it[1].w.k = $stroke
          file.layers[3].shapes[3].w.k = $stroke
        break;
      case "Attach_Build":
          file.layers[1].shapes[0].it[1].c.k = $color
          file.layers[1].shapes[0].it[1].w.k = $stroke
        break;
      case "Audio_Build":
          file.layers[1].shapes[5].c.k = $color
          file.layers[1].shapes[5].w.k = $stroke
        break;
      case "Bookmark_Build":
          file.layers[1].shapes[1].c.k = $color
          file.layers[1].shapes[1].w.k = $stroke
        break;
      case "Calendar_Build":
          file.layers[2].shapes[2].c.k = $color
          file.layers[3].shapes[1].c.k = $color
          file.layers[4].shapes[1].c.k = $color
          file.layers[5].shapes[1].c.k = $color
          file.layers[6].shapes[1].c.k = $color
          file.layers[2].shapes[2].w.k = $stroke
          file.layers[3].shapes[1].w.k = $stroke
          file.layers[4].shapes[1].w.k = $stroke
          file.layers[5].shapes[1].w.k = $stroke
          file.layers[6].shapes[1].w.k = $stroke
        break;
      case "Camera_Build":
          file.layers[1].shapes[0].it[1].c.k = $color
          file.layers[1].shapes[1].it[1].c.k = $color
          file.layers[1].shapes[2].it[1].c.k = $color
          file.layers[1].shapes[2].it[2].c.k = $color
          file.layers[1].shapes[0].it[1].w.k = $stroke
          file.layers[1].shapes[1].it[1].w.k = $stroke
          file.layers[1].shapes[2].it[1].w.k = $stroke
          file.layers[1].shapes[2].it[2].w.k = $stroke
        break;
      case "Cart_Add_Build":
          file.layers[1].shapes[2].c.k = $color
          file.layers[2].shapes[0].it[1].c.k = $color
          file.layers[2].shapes[1].it[1].c.k = $color
          file.layers[2].shapes[2].it[1].c.k = $color
          file.layers[2].shapes[3].it[1].c.k = $color
          file.layers[3].shapes[2].c.k = $color
          file.layers[1].shapes[2].w.k = $stroke
          file.layers[2].shapes[6].w.k = $stroke
          file.layers[3].shapes[2].w.k = $stroke
        break;
      case "Cart_Build":
          file.layers[1].shapes[0].it[1].c.k = $color
          file.layers[1].shapes[1].it[1].c.k = $color
          file.layers[1].shapes[2].it[1].c.k = $color
          file.layers[1].shapes[3].it[1].c.k = $color
          file.layers[1].shapes[7].w.k = $stroke
        break;
      case "Cast_Build":
          file.layers[2].shapes[1].c.k = $color
          file.layers[3].shapes[1].c.k = $color
          file.layers[4].shapes[0].it[1].c.k = $color
          file.layers[5].shapes[0].it[1].w.k = $stroke
          file.layers[2].shapes[1].w.k = $stroke
          file.layers[3].shapes[1].w.k = $stroke
          file.layers[4].shapes[0].it[1].w.k = $stroke
          file.layers[5].shapes[0].it[1].w.k = $stroke
        break;
      case "Check_Build":
          file.layers[1].shapes[0].it[1].c.k = $color
          file.layers[1].shapes[0].it[1].w.k = $stroke
        break;
      case "Chevron_Down_Build":
          file.layers[1].shapes[1].c.k = $color
          file.layers[1].shapes[1].w.k = $stroke
        break;
      case "Chevron_Left_Build":
          file.layers[1].shapes[1].c.k = $color
          file.layers[1].shapes[1].w.k = $stroke
        break;
      case "Chevron_Right_Build":
          file.layers[2].shapes[1].c.k = $color
          file.layers[2].shapes[1].w.k = $stroke
        break;
      case "Chevron_Up_Build":
          file.layers[1].shapes[1].c.k = $color
          file.layers[1].shapes[1].w.k = $stroke
        break;
      case "Cloud_Build":
          file.layers[1].shapes[0].it[1].c.k = $color
          file.layers[2].shapes[0].it[1].c.k = $color
          file.layers[1].shapes[0].it[1].w.k = $stroke
          file.layers[2].shapes[0].it[1].w.k = $stroke
        break;
      case "DirectionalPad_Build":
          file.layers[1].shapes[2].c.k = $color
          file.layers[2].shapes[0].it[1].c.k = $color
          file.layers[3].shapes[0].it[1].c.k = $color
          file.layers[4].shapes[0].it[1].c.k = $color
          file.layers[5].shapes[0].it[1].w.k = $stroke
          file.layers[1].shapes[2].w.k = $stroke
          file.layers[2].shapes[0].it[1].w.k = $stroke
          file.layers[3].shapes[0].it[1].w.k = $stroke
          file.layers[4].shapes[0].it[1].w.k = $stroke
          file.layers[5].shapes[0].it[1].w.k = $stroke
        break;
      case "Document_Build":
        file.layers[2].shapes[0].it[1].c.k = $color
        file.layers[3].shapes[0].it[1].c.k = $color
        file.layers[2].shapes[0].it[1].w.k = $stroke
        file.layers[3].shapes[0].it[1].w.k = $stroke
        break;
      case "Dots_Horizontal_Build":
        file.layers[1].shapes[0].it[1].c.k = $color
        file.layers[2].shapes[0].it[1].c.k = $color
        file.layers[3].shapes[0].it[1].c.k = $color
        file.layers[1].shapes[0].it[1].w.k = $stroke
        file.layers[2].shapes[0].it[1].w.k = $stroke
        file.layers[3].shapes[0].it[1].w.k = $stroke
        break;
      case "Dots_Vertical_Build":
        file.layers[1].shapes[0].it[1].c.k = $color
        file.layers[2].shapes[0].it[1].c.k = $color
        file.layers[3].shapes[0].it[1].c.k = $color
        file.layers[1].shapes[0].it[1].w.k = $stroke
        file.layers[2].shapes[0].it[1].w.k = $stroke
        file.layers[3].shapes[0].it[1].w.k = $stroke
        break;
      case "Edit_Build":
          file.layers[2].shapes[0].it[1].c.k = $color
          file.layers[3].shapes[0].it[1].c.k = $color
          file.layers[4].shapes[0].it[1].c.k = $color
          file.layers[5].shapes[0].it[1].c.k = $color
          file.layers[2].shapes[0].it[1].w.k = $stroke
          file.layers[3].shapes[0].it[1].w.k = $stroke
          file.layers[4].shapes[0].it[1].w.k = $stroke
          file.layers[5].shapes[0].it[1].w.k = $stroke
        break;
      case "Eye_Build":
          file.layers[1].shapes[1].c.k = $color
          file.layers[2].shapes[1].c.k = $color
          file.layers[1].shapes[1].w.k = $stroke
          file.layers[2].shapes[1].w.k = $stroke
        break;
      case "Eye_Off_Build":
          file.layers[1].shapes[1].c.k = $color
          file.layers[2].shapes[1].c.k = $color
          file.layers[1].shapes[1].w.k = $stroke
          file.layers[2].shapes[1].w.k = $stroke
        break;
      case "Folder_Build":
          file.layers[2].shapes[1].c.k = $color
          file.layers[3].shapes[1].c.k = $color
          file.layers[2].shapes[1].w.k = $stroke
          file.layers[3].shapes[1].w.k = $stroke
        break;
      case "Garbage_Build":
          file.layers[1].shapes[0].it[1].c.k = $color
          file.layers[1].shapes[1].it[1].c.k = $color
          file.layers[1].shapes[2].it[1].c.k = $color
          file.layers[1].shapes[3].it[1].c.k = $color
          file.layers[1].shapes[0].it[1].w.k = $stroke
          file.layers[1].shapes[1].it[1].w.k = $stroke
          file.layers[1].shapes[2].it[1].w.k = $stroke
          file.layers[1].shapes[3].it[1].w.k = $stroke
        break;
      case "Heart_Build":
          file.layers[1].shapes[1].c.k = $color
          file.layers[1].shapes[1].w.k = $stroke
        break;
      case "Home_Build":
          file.layers[1].shapes[0].it[1].c.k = $color
          file.layers[2].shapes[0].it[1].c.k = $color
          file.layers[3].shapes[0].it[1].c.k = $color
          file.layers[4].shapes[0].it[1].c.k = $color
          file.layers[1].shapes[0].it[1].w.k = $stroke
          file.layers[2].shapes[0].it[1].w.k = $stroke
          file.layers[3].shapes[0].it[1].w.k = $stroke
          file.layers[4].shapes[0].it[1].w.k = $stroke
        break;
      case "Image_Add_Build":
          file.layers[2].shapes[0].it[1].c.k = $color
          file.layers[3].shapes[0].it[1].c.k = $color
          file.layers[3].shapes[1].it[1].c.k = $color
          file.layers[3].shapes[2].c.k = $color
          file.layers[4].shapes[2].c.k = $color
          file.layers[5].shapes[0].it[1].c.k = $color
          file.layers[5].shapes[0].it[2].c.k = $color
          file.layers[2].shapes[0].it[1].w.k = $stroke
          file.layers[3].shapes[0].it[1].w.k = $stroke
          file.layers[3].shapes[1].it[1].w.k = $stroke
          file.layers[3].shapes[2].w.k = $stroke
          file.layers[4].shapes[2].w.k = $stroke
          file.layers[5].shapes[0].it[1].w.k = $stroke
          file.layers[5].shapes[0].it[2].w.k = $stroke
        break;
      case "Image_Build":
          file.layers[1].shapes[0].it[1].c.k = $color
          file.layers[1].shapes[1].it[1].c.k = $color
          file.layers[1].shapes[2].c.k = $color
          file.layers[2].shapes[0].it[1].c.k = $color
          file.layers[3].shapes[0].it[1].c.k = $color
          file.layers[1].shapes[0].it[1].w.k = $stroke
          file.layers[1].shapes[1].it[1].w.k = $stroke
          file.layers[1].shapes[2].w.k = $stroke
          file.layers[2].shapes[0].it[1].w.k = $stroke
          file.layers[3].shapes[0].it[1].w.k = $stroke
        break;
      case "Info_Build":
          file.layers[2].shapes[1].c.k = $color
          file.layers[3].shapes[2].c.k = $color
          file.layers[2].shapes[1].w.k = $stroke
          file.layers[3].shapes[2].w.k = $stroke
        break;
      case "Laptop_Build":
          file.layers[2].shapes[2].c.k = $color
          file.layers[2].shapes[2].w.k = $stroke
        break;
      case "Link_Build":
          file.layers[1].shapes[0].it[1].c.k = $color
          file.layers[2].shapes[0].it[1].c.k = $color
          file.layers[1].shapes[0].it[1].w.k = $stroke
          file.layers[2].shapes[0].it[1].w.k = $stroke
        break;
      case "Mail_Build":
          file.layers[2].shapes[0].it[2].c.k = $color
          file.layers[3].shapes[0].it[2].c.k = $color
          file.layers[4].shapes[0].it[1].c.k = $color
          file.layers[5].shapes[0].it[1].c.k = $color
          file.layers[6].shapes[0].it[1].c.k = $color
          file.layers[2].shapes[0].it[2].w.k = $stroke
          file.layers[3].shapes[0].it[2].w.k = $stroke
          file.layers[4].shapes[0].it[1].w.k = $stroke
          file.layers[5].shapes[0].it[1].w.k = $stroke
          file.layers[6].shapes[0].it[1].w.k = $stroke
        break;
      case "Maximize_Build":
          file.layers[1].shapes[4].c.k = $color
          file.layers[1].shapes[4].w.k = $stroke
        break;
      case "Microphone_Build":
          file.layers[2].shapes[1].c.k = $color
          file.layers[3].shapes[0].it[1].c.k = $color
          file.layers[2].shapes[1].w.k = $stroke
          file.layers[3].shapes[0].it[1].w.k = $stroke
        break;
      case "Microphone_Off_Build":
          file.layers[1].shapes[0].it[2].c.k = $color
          file.layers[2].shapes[2].c.k = $color
          file.layers[3].shapes[1].c.k = $color
          file.layers[5].shapes[0].it[1].c.k = $color
          file.layers[5].shapes[2].c.k = $color
          file.layers[1].shapes[0].it[2].w.k = $stroke
          file.layers[2].shapes[2].w.k = $stroke
          file.layers[3].shapes[1].w.k = $stroke
          file.layers[5].shapes[0].it[1].w.k = $stroke
          file.layers[5].shapes[2].w.k = $stroke
        break;
      case "Minimize_Build":
          file.layers[1].shapes[4].c.k = $color
          file.layers[1].shapes[4].w.k = $stroke
        break;
      case "Pencil_Build":
          file.layers[2].shapes[0].it[1].c.k = $color
          file.layers[3].shapes[0].it[1].c.k = $color
          file.layers[4].shapes[0].it[1].c.k = $color
          file.layers[2].shapes[0].it[1].w.k = $stroke
          file.layers[3].shapes[0].it[1].w.k = $stroke
          file.layers[4].shapes[0].it[1].w.k = $stroke
        break;
      case "Printer_Build":
          file.layers[2].shapes[1].c.k = $color
          file.layers[4].shapes[0].it[1].c.k = $color
          file.layers[5].shapes[0].it[1].c.k = $color
          file.layers[6].shapes[0].it[1].c.k = $color
          file.layers[2].shapes[1].w.k = $stroke
          file.layers[4].shapes[0].it[1].w.k = $stroke
          file.layers[5].shapes[0].it[1].w.k = $stroke
          file.layers[6].shapes[0].it[1].w.k = $stroke
        break;
      case "Redo_Build":
          file.layers[1].shapes[0].it[1].c.k = $color
          file.layers[3].shapes[0].it[1].c.k = $color
          file.layers[1].shapes[0].it[1].w.k = $stroke
          file.layers[3].shapes[0].it[1].w.k = $stroke
        break;
      case "Repeat_Build":
          file.layers[1].shapes[0].it[1].c.k = $color
          file.layers[3].shapes[0].it[1].c.k = $color
          file.layers[4].shapes[0].it[1].c.k = $color
          file.layers[5].shapes[0].it[1].c.k = $color
          file.layers[7].shapes[0].it[1].c.k = $color
          file.layers[8].shapes[0].it[1].c.k = $color
          file.layers[9].shapes[0].it[1].c.k = $color
          file.layers[1].shapes[0].it[1].w.k = $stroke
          file.layers[3].shapes[0].it[1].w.k = $stroke
          file.layers[4].shapes[0].it[1].w.k = $stroke
          file.layers[5].shapes[0].it[1].w.k = $stroke
          file.layers[7].shapes[0].it[1].w.k = $stroke
          file.layers[8].shapes[0].it[1].w.k = $stroke
          file.layers[9].shapes[0].it[1].w.k = $stroke
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

    let r_converted = (r/255).toFixed(2),
    g_converted = (g/255).toFixed(2),
    b_converted = (b/255).toFixed(2),
    lottieR = parseFloat(r_converted),
    lottieG = parseFloat(g_converted),
    lottieB = parseFloat(b_converted);

    return [lottieR,lottieG,lottieB, 1];

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
  $fill = $(".fill"),
  $stroke = $(".stroke"),
  $saturationBar = $("#visibleSaturation"),
  $lightnessBar = $("#visibleLightness");


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
    $("#scale").val($maxscale);
    $("#scaleOutputId").val($("#scale").val());
  }
  if ($("#stroke").val() > $("#scale").val() / 11.99) {
    $(`#stroke`).val($maxstroke);
    $("#strokeOutputId").val($("#stroke").val());
  }



  return [$scale, $stroke, $duration]

}

$('input').on('input', function() {
  let lottieColor = setColor(),
  scaleStrokeDuration = setScaleStrokeDuration();

});

$("#render").click(function(){
  let lottieColor = setColor(),
  scaleStrokeDuration = setScaleStrokeDuration();
  browserJSON.forEach(function(file) {
    editJSON(file, lottieColor, scaleStrokeDuration);
  });
  // console.log(browserJSON);
  browserJSON.forEach(createJSON);
  console.log(exportJSON);

})

$(document).ready(function() {

  lottieFiles.forEach(setName);
  lottieFiles.forEach(makeObject);


  playFile(gridJson);

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
