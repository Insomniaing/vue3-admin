import { h } from "vue";
import { NIcon } from "naive-ui";
import {
  BarChart as BarChart,
  Image as ImageIcon,
  AirplaneSharp as AirplaneIcon,
  Footsteps as FootstepsIcon,
  Heart as HeartIcon,
  Settings as SettingsIcon,
} from "@vicons/ionicons5";
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
export const menuOptions = [
  {
    label: "数据",
    key: "Board",
    icon: renderIcon(BarChart),
  },
  {
    label: "图库",
    key: "Picture",
    icon: renderIcon(ImageIcon),
    children: [
      {
        label: "壁纸",
        key: "Wallpaper",
      },
    ],
  },
  {
    label: "记录",
    key: "Record",
    icon: renderIcon(AirplaneIcon),
    children: [
      {
        label: "旅行",
        key: "Travel",
        icon: renderIcon(FootstepsIcon),
      },
      {
        label: "心情",
        key: "Mood",
        icon: renderIcon(HeartIcon),
      },
    ],
  },
  {
    label: "设定",
    key: "Setting",
    icon: renderIcon(SettingsIcon),
    children: [
      {
        label: "个人",
        key: "My",
        icon: renderIcon(FootstepsIcon),
      },
      {
        label: "权限",
        key: "Jurisdiction",
        icon: renderIcon(HeartIcon),
      },
    ],
  },
]