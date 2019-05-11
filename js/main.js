/* global lottie, bodymovin, JSZip */
// 'use strict';

const lottieFiles = [{ name: 'Alarm_Clock_Build', id: 'icon-1'},{ name: 'Arrow_BottomLeft_Build', id: 'icon-2'},{ name: 'Arrow_BottomRight_Build', id: 'icon-3'},{ name: 'Arrow_Down_Build', id: 'icon-4'},{ name: 'Arrow_Left_Build', id: 'icon-5'},{ name: 'Arrow_Right_Build', id: 'icon-6'},{ name: 'Arrow_TopLeft_Build', id: 'icon-7'},{ name: 'Arrow_TopRight_Build', id: 'icon-8'},{ name: 'Arrow_Up_Build', id: 'icon-9'},{ name: 'Attach_Build', id: 'icon-10'},{ name: 'Audio_Build', id: 'icon-11'},{ name: 'Battery_0_Build', id: 'icon-12'},{ name: 'Battery_25_Build', id: 'icon-13'},{ name: 'Battery_50_Build', id: 'icon-14'},{ name: 'Battery_75_Build', id: 'icon-15'},{ name: 'Battery_100_Build', id: 'icon-16'},{ name: 'Battery_Charging_Build', id: 'icon-17'},{ name: 'Bookmark_Build', id: 'icon-18'},{ name: 'Calendar_Build', id: 'icon-19'},{ name: 'Camera_Build', id: 'icon-20'},{ name: 'Cart_Build_Add', id: 'icon-21'},{ name: 'Cart_Build', id: 'icon-22'},{ name: 'Cast_Build', id: 'icon-23'},{ name: 'Check_Build', id: 'icon-24'},{ name: 'Chevron_Down_Build', id: 'icon-25'},{ name: 'Chevron_Left_Build', id: 'icon-26'},{ name: 'Chevron_Right_Build', id: 'icon-27'},{ name: 'Chevron_Up_Build', id: 'icon-28'},{ name: 'Chevrons_Left_Build', id: 'icon-29'},{ name: 'Chevrons_Right_Build', id: 'icon-30'},{ name: 'Cloud_Build', id: 'icon-31'},{ name: 'DirectionalPad_Build', id: 'icon-32'},{ name: 'Document_Build', id: 'icon-33'},{ name: 'Dots_Horizontal_Build', id: 'icon-34'},{ name: 'Dots_Vertical_Build', id: 'icon-35'},{ name: 'Download_Alternate_Build', id: 'icon-36'},{ name: 'Download_Build', id: 'icon-37'},{ name: 'Edit_Build', id: 'icon-38'},{ name: 'Eye_Build', id: 'icon-39'},{ name: 'Eye_Off_Build', id: 'icon-40'},{ name: 'Folder_Add_Build', id: 'icon-41'},{ name: 'Folder_Build', id: 'icon-42'},{ name: 'Garbage_Build', id: 'icon-43'},{ name: 'Heart_Build', id: 'icon-44'},{ name: 'Home_Build', id: 'icon-45'},{ name: 'Image_Add_Build', id: 'icon-46'},{ name: 'Image_Build', id: 'icon-47'},{ name: 'ImageGallery_Build', id: 'icon-48'},{ name: 'Info_Build', id: 'icon-49'},{ name: 'Laptop_Build', id: 'icon-50'},{ name: 'Link_Build', id: 'icon-51'},{ name: 'Lock_Build', id: 'icon-52'},{ name: 'Mail_Build', id: 'icon-53'},{ name: 'Maximize_Build', id: 'icon-54'},{ name: 'Menu_Build', id: 'icon-55'},{ name: 'Microphone_Build', id: 'icon-56'},{ name: 'Microphone_Off_Build', id: 'icon-57'},{ name: 'Minimize_Build', id: 'icon-58'},{ name: 'Minus_Build', id: 'icon-59'},{ name: 'Notifications_Build', id: 'icon-60'},{ name: 'Pause_Build', id: 'icon-61'},{ name: 'Pencil_Build', id: 'icon-62'},{ name: 'Phone_Build', id: 'icon-63'},{ name: 'Pin_Build', id: 'icon-64'},{ name: 'Play_Build', id: 'icon-65'},{ name: 'Playlist_Add_Build', id: 'icon-66'},{ name: 'Playlist_Added_Build', id: 'icon-67'},{ name: 'Playlist_Build', id: 'icon-68'},{ name: 'Plus_Build', id: 'icon-69'},{ name: 'Power_Build', id: 'icon-70'},{ name: 'Printer_Build', id: 'icon-71'},{ name: 'Redo_Build', id: 'icon-72'},{ name: 'Refresh_Build', id: 'icon-73'},{ name: 'Repeat_Build', id: 'icon-74'},{ name: 'Repeat_One_Build', id: 'icon-75'},{ name: 'Search_Build', id: 'icon-76'},{ name: 'Settings_Build', id: 'icon-77'},{ name: 'Share_Build', id: 'icon-78'},{ name: 'Shuffle_Build', id: 'icon-79'},{ name: 'Skip_Backward_Build', id: 'icon-80'},{ name: 'Skip_Forward_Build', id: 'icon-81'},{ name: 'Star_Build', id: 'icon-82'},{ name: 'Statistics_Alternate_Build', id: 'icon-83'},{ name: 'Statistics_Build', id: 'icon-84'},{ name: 'Stop_Build', id: 'icon-85'},{ name: 'Sync_Build', id: 'icon-86'},{ name: 'Target_Build', id: 'icon-87'},{ name: 'Undo_Build', id: 'icon-88'},{ name: 'Unlock_Build', id: 'icon-89'},{ name: 'Upload_Build', id: 'icon-90'},{ name: 'User_Build', id: 'icon-91'},{ name: 'Video_Add_Build', id: 'icon-92'},{ name: 'Video_Build', id: 'icon-93'},{ name: 'VideoGallery_Build', id: 'icon-94'},{ name: 'Volume_High_Build', id: 'icon-95'},{ name: 'Volume_Low_Build', id: 'icon-96'},{ name: 'Volume_Mute_Build', id: 'icon-97'},{ name: 'X_Build', id: 'icon-98'},{ name: 'Zoom_In_Build', id: 'icon-99'},{ name: 'Zoom_Out_Build', id: 'icon-100'}];
const gridJson = {name: 'Test_Grid', id: 'grid-container'};
let browserJSON = [];
let exportJSON = [];



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
  $(`#${file.id}`).attr('data-name', `${file.name}`);
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

function downloadZip() {
  var zip = new JSZip();

  for (var file = 0; file < exportJSON.length; file++) {
    zip.file(`${lottieFiles[file].name}.json`, `${exportJSON[file]}`);
  }

    zip.generateAsync({type:'blob'})
    .then(function(content) {

    saveAs(content, 'exportedjson.zip');
    });
}

function editJSON(file, lottieColor, scaleStrokeDuration) {
    file.op = 30;


    let $scale = scaleStrokeDuration[0],
    $stroke = (scaleStrokeDuration[1].replace('pt',''))*20,
    $height = parseInt(scaleStrokeDuration[0].replace('px','')),
    $outputheight = (($height/24)*100).toFixed(2),
    $jsonsize = [$outputheight, $outputheight, 100],
    $color = lottieColor,
    $duration = scaleStrokeDuration[2].replace('ms',''),
    $framerate = parseFloat(((file.op/$duration)*1000), 10);

    $framerate = Math.round($framerate * 1e2) / 1e2;

    file.fr = $framerate;
    file.layers[0].ks['s'].k = $jsonsize;
    file.h = $height;
    file.w = $height;

    // Current JSON paths:
  switch (file.nm) {
  case 'Alarm_Clock_Build':
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[3].shapes[3].c.k = $color;
    file.layers[4].shapes[2].c.k = $color;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    file.layers[3].shapes[3].w.k = $stroke;
    file.layers[4].shapes[2].w.k = $stroke;
    break;
  case 'Arrow_BottomLeft_Build':
    debugger;
    break;
  case 'Arrow_BottomRight_Build':
    debugger;
    break;
  case 'Arrow_Down_Build':
    debugger;
    break;
  case 'Arrow_Left_Build':
    debugger;
    break;
  case 'Arrow_Right_Build':
    debugger;
    break;
  case 'Arrow_TopLeft_Build':
    debugger;
    break;
  case 'Arrow_TopRight_Build':
    debugger;
    break;
  case 'Arrow_Up_Build':
    debugger;
    break;
  case 'Attach_Build':
    file.layers[1].shapes[0].it[1].c.k = $color;
    file.layers[1].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Audio_Build':
    file.layers[1].shapes[5].c.k = $color;
    file.layers[1].shapes[5].w.k = $stroke;
    break;
  case 'Battery_0_Build':
    debugger;
    break;
  case 'Battery_25_Build':
    debugger;
    break;
  case 'Battery_50_Build':
    debugger;
    break;
  case 'Battery_75_Build':
    debugger;
    break;
  case 'Battery_100_Build':
    debugger;
    break;
  case 'Battery_Charging_Build':
    debugger;
    break;
  case 'Bookmark_Build':
    file.layers[1].shapes[1].c.k = $color;
    file.layers[1].shapes[1].w.k = $stroke;
    break;
  case 'Calendar_Build':
    file.layers[2].shapes[2].c.k = $color;
    file.layers[3].shapes[1].c.k = $color;
    file.layers[4].shapes[1].c.k = $color;
    file.layers[5].shapes[1].c.k = $color;
    file.layers[6].shapes[1].c.k = $color;
    file.layers[2].shapes[2].w.k = $stroke;
    file.layers[3].shapes[1].w.k = $stroke;
    file.layers[4].shapes[1].w.k = $stroke;
    file.layers[5].shapes[1].w.k = $stroke;
    file.layers[6].shapes[1].w.k = $stroke;
    break;
  case 'Camera_Build':
    file.layers[1].shapes[0].it[1].c.k = $color;
    file.layers[1].shapes[1].it[1].c.k = $color;
    file.layers[1].shapes[2].it[1].c.k = $color;
    file.layers[1].shapes[2].it[2].c.k = $color;
    file.layers[1].shapes[0].it[1].w.k = $stroke;
    file.layers[1].shapes[1].it[1].w.k = $stroke;
    file.layers[1].shapes[2].it[2].w.k = $stroke;
    break;
  case 'Cart_Add_Build':
    file.layers[1].shapes[2].c.k = $color;
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[2].shapes[1].it[1].c.k = $color;
    file.layers[2].shapes[2].it[1].c.k = $color;
    file.layers[2].shapes[3].it[1].c.k = $color;
    file.layers[2].shapes[6].c.k = $color;
    file.layers[3].shapes[2].c.k = $color;
    file.layers[1].shapes[2].w.k = $stroke;
    file.layers[2].shapes[6].w.k = $stroke;
    file.layers[3].shapes[2].w.k = $stroke;
    break;
  case 'Cart_Build':
    file.layers[1].shapes[0].it[1].c.k = $color;
    file.layers[1].shapes[1].it[1].c.k = $color;
    file.layers[1].shapes[2].it[1].c.k = $color;
    file.layers[1].shapes[3].it[1].c.k = $color;
    file.layers[1].shapes[7].c.k = $color;
    file.layers[1].shapes[7].w.k = $stroke;
    break;
  case 'Cast_Build':
    file.layers[2].shapes[1].c.k = $color;
    file.layers[3].shapes[1].c.k = $color;
    file.layers[4].shapes[0].it[1].c.k = $color;
    file.layers[5].shapes[0].it[1].w.k = $stroke;
    file.layers[2].shapes[1].w.k = $stroke;
    file.layers[3].shapes[1].w.k = $stroke;
    file.layers[4].shapes[0].it[1].w.k = $stroke;
    file.layers[5].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Check_Build':
    file.layers[1].shapes[0].it[1].c.k = $color;
    file.layers[1].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Chevron_Down_Build':
    file.layers[1].shapes[1].c.k = $color;
    file.layers[1].shapes[1].w.k = $stroke;
    break;
  case 'Chevron_Left_Build':
    file.layers[1].shapes[1].c.k = $color;
    file.layers[1].shapes[1].w.k = $stroke;
    break;
  case 'Chevron_Right_Build':
    file.layers[2].shapes[1].c.k = $color;
    file.layers[2].shapes[1].w.k = $stroke;
    break;
  case 'Chevron_Up_Build':
    file.layers[1].shapes[1].c.k = $color;
    file.layers[1].shapes[1].w.k = $stroke;
    break;
  case 'Cloud_Build':
    file.layers[1].shapes[0].it[1].c.k = $color;
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[1].shapes[0].it[1].w.k = $stroke;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    break;
  case 'DirectionalPad_Build':
    file.layers[1].shapes[2].c.k = $color;
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[3].shapes[0].it[1].c.k = $color;
    file.layers[4].shapes[0].it[1].c.k = $color;
    file.layers[5].shapes[0].it[1].c.k = $color;
    file.layers[1].shapes[2].w.k = $stroke;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    file.layers[3].shapes[0].it[1].w.k = $stroke;
    file.layers[4].shapes[0].it[1].w.k = $stroke;
    file.layers[5].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Document_Build':
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[3].shapes[0].it[1].c.k = $color;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    file.layers[3].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Dots_Horizontal_Build':
    file.layers[1].shapes[0].it[1].c.k = $color;
    file.layers[1].shapes[0].it[2].c.k = $color;
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[2].shapes[0].it[2].c.k = $color;
    file.layers[3].shapes[0].it[1].c.k = $color;
    file.layers[3].shapes[0].it[2].c.k = $color;
    file.layers[1].shapes[0].it[1].w.k = $stroke;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    file.layers[3].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Dots_Vertical_Build':
    file.layers[1].shapes[0].it[1].c.k = $color;
    file.layers[1].shapes[0].it[2].c.k = $color;
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[2].shapes[0].it[2].c.k = $color;
    file.layers[3].shapes[0].it[1].c.k = $color;
    file.layers[3].shapes[0].it[2].c.k = $color;
    file.layers[1].shapes[0].it[1].w.k = $stroke;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    file.layers[3].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Download_Alternate_Build':
    debugger;
    break;
  case 'Download_Build':
    debugger;
    break;
  case 'Edit_Build':
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[3].shapes[0].it[1].c.k = $color;
    file.layers[4].shapes[0].it[1].c.k = $color;
    file.layers[5].shapes[0].it[1].c.k = $color;
    file.layers[6].shapes[8].c.k = $color;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    file.layers[3].shapes[0].it[1].w.k = $stroke;
    file.layers[4].shapes[0].it[1].w.k = $stroke;
    file.layers[5].shapes[0].it[1].w.k = $stroke;
    file.layers[6].shapes[8].w.k = $stroke;
    break;
  case 'Eye_Build':
    file.layers[1].shapes[1].c.k = $color;
    file.layers[2].shapes[1].c.k = $color;
    file.layers[1].shapes[1].w.k = $stroke;
    file.layers[2].shapes[1].w.k = $stroke;
    break;
  case 'Eye_Off_Build':
    file.layers[1].shapes[1].c.k = $color;
    file.layers[2].shapes[1].c.k = $color;
    file.layers[3].shapes[1].c.k = $color;
    file.layers[1].shapes[1].w.k = $stroke;
    file.layers[2].shapes[1].w.k = $stroke;
    file.layers[3].shapes[1].w.k = $stroke;
    break;
  case 'Folder_Add_Build':
    debugger;
    break;
  case 'Folder_Build':
    file.layers[2].shapes[1].c.k = $color;
    file.layers[3].shapes[1].c.k = $color;
    file.layers[2].shapes[1].w.k = $stroke;
    file.layers[3].shapes[1].w.k = $stroke;
    break;
  case 'Garbage_Build':
    file.layers[1].shapes[0].it[1].c.k = $color;
    file.layers[1].shapes[1].it[1].c.k = $color;
    file.layers[1].shapes[2].it[1].c.k = $color;
    file.layers[1].shapes[3].it[1].c.k = $color;
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[2].shapes[1].it[1].c.k = $color;
    file.layers[3].shapes[0].it[1].c.k = $color;
    file.layers[1].shapes[0].it[1].w.k = $stroke;
    file.layers[1].shapes[1].it[1].w.k = $stroke;
    file.layers[1].shapes[2].it[1].w.k = $stroke;
    file.layers[1].shapes[3].it[1].w.k = $stroke;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    file.layers[2].shapes[1].it[1].w.k = $stroke;
    file.layers[3].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Heart_Build':
    file.layers[1].shapes[1].c.k = $color;
    file.layers[1].shapes[1].w.k = $stroke;
    break;
  case 'Home_Build':
    file.layers[1].shapes[0].it[1].c.k = $color;
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[3].shapes[0].it[1].c.k = $color;
    file.layers[4].shapes[0].it[1].c.k = $color;
    file.layers[1].shapes[0].it[1].w.k = $stroke;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    file.layers[3].shapes[0].it[1].w.k = $stroke;
    file.layers[4].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Image_Add_Build':
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[3].shapes[0].it[1].c.k = $color;
    file.layers[3].shapes[1].it[1].c.k = $color;
    file.layers[3].shapes[2].c.k = $color;
    file.layers[4].shapes[2].c.k = $color;
    file.layers[5].shapes[0].it[1].c.k = $color;
    file.layers[5].shapes[0].it[2].c.k = $color;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    file.layers[3].shapes[2].w.k = $stroke;
    file.layers[4].shapes[2].w.k = $stroke;
    file.layers[5].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Image_Build':
    file.layers[1].shapes[0].it[1].c.k = $color;
    file.layers[1].shapes[1].it[1].c.k = $color;
    file.layers[1].shapes[2].c.k = $color;
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[3].shapes[0].it[1].c.k = $color;
    file.layers[1].shapes[2].w.k = $stroke;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    file.layers[3].shapes[0].it[1].w.k = $stroke;
    break;
  case 'ImageGallery_Build':
    debugger;
    break;
  case 'Info_Build':
    file.layers[2].shapes[1].c.k = $color;
    file.layers[3].shapes[2].c.k = $color;
    file.layers[2].shapes[1].w.k = $stroke;
    file.layers[3].shapes[2].w.k = $stroke;
    break;
  case 'Laptop_Build':
    file.layers[2].shapes[2].c.k = $color;
    file.layers[2].shapes[2].w.k = $stroke;
    break;
  case 'Link_Build':
    file.layers[1].shapes[0].it[1].c.k = $color;
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[3].shapes[1].c.k = $color;
    file.layers[1].shapes[0].it[1].w.k = $stroke;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    file.layers[3].shapes[1].w.k = $stroke;
    break;
  case 'Lock_Build':
    debugger;
    break;
  case 'Mail_Build':
    file.layers[2].shapes[0].it[2].c.k = $color;
    file.layers[3].shapes[0].it[2].c.k = $color;
    file.layers[4].shapes[0].it[1].c.k = $color;
    file.layers[5].shapes[0].it[1].c.k = $color;
    file.layers[6].shapes[0].it[1].c.k = $color;
    file.layers[2].shapes[0].it[2].w.k = $stroke;
    file.layers[3].shapes[0].it[2].w.k = $stroke;
    file.layers[4].shapes[0].it[1].w.k = $stroke;
    file.layers[5].shapes[0].it[1].w.k = $stroke;
    file.layers[6].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Maximize_Build':
    file.layers[1].shapes[4].c.k = $color;
    file.layers[1].shapes[4].w.k = $stroke;
    break;
  case 'Menu_Build':
    debugger;
    break;
  case 'Microphone_Build':
    file.layers[2].shapes[1].c.k = $color;
    file.layers[3].shapes[0].it[1].c.k = $color;
    file.layers[2].shapes[1].w.k = $stroke;
    file.layers[3].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Microphone_Off_Build':
    file.layers[1].shapes[0].it[2].c.k = $color;
    file.layers[2].shapes[2].c.k = $color;
    file.layers[3].shapes[1].c.k = $color;
    file.layers[5].shapes[0].it[1].c.k = $color;
    file.layers[5].shapes[2].c.k = $color;
    file.layers[1].shapes[0].it[2].w.k = $stroke;
    file.layers[2].shapes[2].w.k = $stroke;
    file.layers[3].shapes[1].w.k = $stroke;
    file.layers[5].shapes[0].it[1].w.k = $stroke;
    file.layers[5].shapes[2].w.k = $stroke;
    break;
  case 'Minimize_Build':
    file.layers[1].shapes[4].c.k = $color;
    file.layers[1].shapes[4].w.k = $stroke;
    break;
  case 'Minus_Build':
    file.layers[1].shapes[1].c.k = $color;
    file.layers[1].shapes[1].w.k = $stroke;
    break;
  case 'Notifications_Build':
    file.layers[1].shapes[0].it[1].c.k = $color;
    file.layers[2].shapes[1].c.k = $color;
    file.layers[1].shapes[0].it[1].w.k = $stroke;
    file.layers[2].shapes[1].w.k = $stroke;
    break;
  case 'Pause_Build':
    file.layers[1].shapes[2].c.k = $color;
    file.layers[1].shapes[2].w.k = $stroke;
    break;
  case 'Pencil_Build':
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[3].shapes[0].it[1].c.k = $color;
    file.layers[4].shapes[0].it[1].c.k = $color;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    file.layers[3].shapes[0].it[1].w.k = $stroke;
    file.layers[4].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Phone_Build':
    file.layers[2].shapes[0].it[1].c.k  = $color;
    file.layers[3].shapes[0].it[1].c.k = $color;
    file.layers[3].shapes[1].c.k  = $color;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    file.layers[3].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Pin_Build':
    file.layers[2].shapes[1].c.k  = $color;
    file.layers[3].shapes[1].c.k = $color;
    file.layers[3].shapes[2].c.k = $color;
    file.layers[4].shapes[1].c.k  = $color;
    file.layers[2].shapes[1].w.k = $stroke;
    file.layers[3].shapes[1].w.k = $stroke;
    file.layers[3].shapes[2].w.k = $stroke;
    file.layers[4].shapes[1].w.k = $stroke;
    break;
  case 'Play_Build':
    file.layers[1].shapes[1].c.k = $color;
    file.layers[1].shapes[1].w.k = $stroke;
    break;
  case 'Playlist_Add_Build':
    file.layers[1].shapes[2].c.k = $color;
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[3].shapes[0].it[1].c.k = $color;
    file.layers[4].shapes[0].it[1].c.k = $color;
    file.layers[1].shapes[2].w.k = $stroke;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    file.layers[3].shapes[0].it[1].w.k = $stroke;
    file.layers[4].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Playlist_Added_Build':
    file.layers[1].shapes[0].it[1].c.k = $color;
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[3].shapes[0].it[1].c.k = $color;
    file.layers[4].shapes[0].it[1].c.k = $color;
    file.layers[1].shapes[0].it[1].w.k = $stroke;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    file.layers[3].shapes[0].it[1].w.k = $stroke;
    file.layers[4].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Playlist_Build':
    file.layers[1].shapes[0].it[1].c.k = $color;
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[3].shapes[0].it[1].c.k = $color;
    file.layers[4].shapes[0].it[1].c.k = $color;
    file.layers[4].shapes[1].c.k = $color;
    file.layers[1].shapes[0].it[1].w.k = $stroke;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    file.layers[3].shapes[0].it[1].w.k = $stroke;
    file.layers[4].shapes[0].it[1].w.k = $stroke;
    file.layers[4].shapes[1].w.k = $stroke;
    break;
  case 'Plus_Build':
    file.layers[1].shapes[1].c.k = $color;
    file.layers[2].shapes[1].c.k = $color;
    file.layers[1].shapes[1].w.k = $stroke;
    file.layers[2].shapes[1].w.k = $stroke;
    break;
  case 'Power_Build':
    file.layers[1].shapes[2].c.k = $color;
    file.layers[2].shapes[1].c.k = $color;
    file.layers[1].shapes[2].w.k = $stroke;
    file.layers[2].shapes[1].w.k = $stroke;
    break;
  case 'Printer_Build':
    file.layers[2].shapes[1].c.k = $color;
    file.layers[3].shapes[1].c.k = $color;
    file.layers[4].shapes[0].it[1].c.k = $color;
    file.layers[5].shapes[0].it[1].c.k = $color;
    file.layers[6].shapes[0].it[1].c.k = $color;
    file.layers[2].shapes[1].w.k = $stroke;
    file.layers[3].shapes[1].w.k = $stroke;
    file.layers[4].shapes[0].it[1].w.k = $stroke;
    file.layers[5].shapes[0].it[1].w.k = $stroke;
    file.layers[6].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Redo_Build':
    file.layers[1].shapes[0].it[1].c.k = $color;
    file.layers[3].shapes[0].it[1].c.k = $color;
    file.layers[1].shapes[0].it[1].w.k = $stroke;
    file.layers[3].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Refresh_Build':
    file.layers[1].shapes[0].it[1].c.k  = $color;
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[1].shapes[0].it[1].w.k = $stroke;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Repeat_Build':
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
    break;
  case 'Repeat_One_Build':
    file.layers[1].shapes[0].it[1].c.k = $color;
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[4].shapes[0].it[1].c.k = $color;
    file.layers[4].shapes[0].it[1].c.k = $color;
    file.layers[5].shapes[0].it[1].c.k = $color;
    file.layers[6].shapes[0].it[1].c.k = $color;
    file.layers[8].shapes[0].it[1].c.k = $color;
    file.layers[9].shapes[0].it[1].c.k = $color;
    file.layers[10].shapes[0].it[1].c.k = $color;
    file.layers[1].shapes[0].it[1].w.k = $stroke;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    file.layers[4].shapes[0].it[1].w.k = $stroke;
    file.layers[4].shapes[0].it[1].w.k = $stroke;
    file.layers[6].shapes[0].it[1].w.k = $stroke;
    file.layers[5].shapes[0].it[1].w.k = $stroke;
    file.layers[8].shapes[0].it[1].w.k = $stroke;
    file.layers[9].shapes[0].it[1].w.k = $stroke;
    file.layers[10].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Search_Build':
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Settings_Build':
    file.layers[1].shapes[0].it[1].c.k = $color;
    file.layers[2].shapes[0].it[1].c.k = $color;
    file.layers[3].shapes[0].it[1].c.k = $color;
    file.layers[4].shapes[0].it[1].c.k = $color;
    file.layers[1].shapes[0].it[1].w.k = $stroke;
    file.layers[2].shapes[0].it[1].w.k = $stroke;
    file.layers[3].shapes[0].it[1].w.k = $stroke;
    file.layers[4].shapes[0].it[1].w.k = $stroke;
    break;
  case 'Shuffle_Build':
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
    break;
  case 'Skip_Backward_Build':
    debugger;
    break;
  case 'Skip_Forward_Build':
    debugger;
    break;
  case 'Star_Build':
    debugger;
    break;
  case 'Statistics_Build':
    debugger;
    break;
  case 'Statistics_Alternate_Build':
    debugger;
    break;
  case 'Stop_Build':
    debugger;
    break;
  case 'Sync_Build':
    debugger;
    break;
  case 'Target_Build':
    debugger;
    break;
  case 'Undo_Build':
    debugger;
    break;
  case 'Unlock_Build':
    debugger;
    break;
  case 'Upload_Build':
    debugger;
    break;
  case 'User_Build':
    debugger;
    break;
  case 'Video_Add_Build':
    debugger;
    break;
  case 'Video_Build':
    debugger;
    break;
  case 'VideoGallery_Build':
    debugger;
    break;
  case 'Volume_High_Build':
    debugger;
    break;
  case 'Volume_Low_Build':
    debugger;
    break;
  case 'Volume_Mute_Build':
    debugger;
    break;
  case 'X_Build':
    debugger;
    break;
  case 'Zoom_In_Build':
    debugger;
    break;
  case 'Zoom_Out_Build':
    debugger;
    break;
  default:

  }
}

function setColor() {
  let $hue = $('#hueID').val(),
  $saturation = $('#saturationID').val(),
  $lightness = $('#lightnessID').val();

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

    return 'rgb(' + r + ',' + g + ',' + b + ')';
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
      r = '0' + r;
    if (g.length == 1)
      g = '0' + g;
    if (b.length == 1)
      b = '0' + b;

    return '#' + r + g + b;
  }

  let $lottieColor = rgbatolottie($hue, $saturation, $lightness),
  $fill = $('.fill'),
  $stroke = $('.stroke'),
  $saturationBar = $('#visibleSaturation'),
  $lightnessBar = $('#visibleLightness');


  $fill.add($stroke).css({stroke: `${$hsl}`, fill: `${$hsl}`})
  $saturationBar.css(`background`, `linear-gradient(to right, hsl(${$hue}, 10%, 0%), hsl(${$hue}, 20%, 50%), hsl(${$hue}, 30%, 50%), hsl(${$hue}, 40%, 50%), hsl(${$hue}, 50%, 50%), hsl(${$hue}, 60%, 50%), hsl(${$hue}, 70%, 50%), hsl(${$hue}, 80%, 50%), hsl(${$hue}, 90%, 50%), hsl(${$hue}, 100%, 50%))`);
  $lightnessBar.css(`background`, `linear-gradient(to right, hsl(${$hue}, 100%, 0%), hsl(${$hue}, 100%, 20%), hsl(${$hue}, 100%, 30%), hsl(${$hue}, 100%, 40%), hsl(${$hue}, 100%, 50%), hsl(${$hue}, 100%, 60%), hsl(${$hue}, 100%, 70%), hsl(${$hue}, 100%, 80%),hsl(${$hue}, 100%, 90%), hsl(${$hue}, 100%, 100%))`);

  return $lottieColor;

}

function setScaleStrokeDuration() {
  let $scale = `${$('#scale').val()}px`,
  $maxstroke = (($('#scale').val()) / 12).toFixed(2);
  $maxscale = (($('#stroke').val()) * 12),
  $stroke = `${$('#stroke').val()}pt`,
  $duration = `${$('#duration').val()}ms`;;

  if ($('#scale').val() < $('#stroke').val() * 11.99) {
    $('#scale').val($maxscale);
    $('#scaleOutputId').val($('#scale').val());
  }
  if ($('#stroke').val() > $('#scale').val() / 11.99) {
    $('#stroke').val($maxstroke);
    $('#strokeOutputId').val($('#stroke').val());
  }



  return [$scale, $stroke, $duration];

}

$('input').on('input', function() {
  let lottieColor = setColor(),
    scaleStrokeDuration = setScaleStrokeDuration();

});

$('#render').click(function(){
  let lottieColor = setColor(),
    scaleStrokeDuration = setScaleStrokeDuration();
  browserJSON.forEach(function(file) {
    editJSON(file, lottieColor, scaleStrokeDuration);
  });
  browserJSON.forEach(createJSON);
  // setTimeout(function(){
  //   alert('2000ms');
  //   downloadZip();
  //
  // },2000)
  downloadZip();
});

$(document).ready(function() {

  lottieFiles.forEach(setName);
  lottieFiles.forEach(makeObject);


  playFile(gridJson);

  $('.icon').click(function(event) {

    let iconID = event.currentTarget.id;

    function playFilePreview(div) {
      if (div.id === iconID) {
        $('#preview').empty();

        let animation = bodymovin.loadAnimation({
          container: document.getElementById('preview'),
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
