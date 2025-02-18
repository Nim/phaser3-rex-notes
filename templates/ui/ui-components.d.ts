import RoundRectangle from './roundrectangle/RoundRectangle';
import RoundRectangleCanvas from './roundrectanglecanvas/RoundRectangleCanvas';
import BBCodeText from './bbcodetext/BBCodeText';
import TagText from './tagtext/TagText';

import Container from './container/Container';
import Canvas from './canvas/Canvas';
import CircleMaskImage from './circlemaskimage/CircleMaskImage';
import AlphaMaskImage from './alphamaskimage/AlphaMaskImage';
import DynamicText from './dynamictext/DynamicText';
import TextPlayer from './textplayer/TextPlayer';
import CanvasInput from './canvasinput/CanvasInput';
import CircularProgress from './circularprogress/CircularProgress';
import CircularProgressCanvas from './circularprogresscanvas/CircularProgressCanvas';
import LineProgress from './lineprogress/LineProgress';
import LineProgressCanvas from './lineprogresscanvas/LineProgressCanvas';
import Knob from './knob/Knob';
import CustomShapes from './customshapes/CustomShapes';
import CustomProgress from './customprogress/CustomProgress';
import TransitionImage from './transitionimage/TransitionImage';
import FullWindowRectangle from './fullwindowrectangle/FullWindowRectangle';
import Cover from './cover/Cover';
import Chart from './chart/Chart';
import NinePatch from './ninepatch/NinePatch';
import NinePatch2 from './ninepatch2/NinePatch';

import Sizer from './sizer/Sizer';
import GridSizer from './gridsizer/GridSizer';
import FixWidthSizer from './fixwidthsizer/FixWidthSizer';
import OverlapSizer from './overlapsizer/OverlapSizer';

import Space from './space/Space';
import Label from './label/Label';
import TitleLabel from './titlelabel/TitleLabel';
import NameValueLabel from './namevaluelabel/NameValueLabel';
import Buttons from './buttons/Buttons';
import GridButtons from './gridbuttons/GridButtons';
import FixWidthButtons from './fixwidthbuttons/FixWidthButtons';
import Dialog from './dialog/Dialog';
import Choices from './choices/Choices';
import HolyGrail from './holygrail/HolyGrail';
import Tabs from './tabs/Tabs';
import Slider from './slider/Slider';
import GridTable from './gridtable/GridTable';
import Menu from './menu/Menu';
import DropDownList from './dropdownlist/DropDownList';
import TextBox from './textbox/TextBox';
import NumberBar from './numberbar/NumberBar';
import ScrollBar from './scrollbar/ScrollBar';
import BadgeLabel from './badgelabel/BadgeLabel';
import Pages from './pages/Pages';
import PerspectiveCard from './perspectivecard/PerspectiveCard';
import TabPages from './tabpages/TabPages';
import TextArea from './textarea/TextArea';
import ScrollablePanel from './scrollablepanel/ScrollablePanel';
import Toast from './toast/Toast';
// import Sides from './sides/Sides';

import Click from './click/Click';
import ClickOutside from './clickoutside/ClickOutside';
import InTouching from './intouching/InTouching';
import Tap from './tap/Tap';
import Press from './press/Press';
import Swipe from './swipe/Swipe';
import Pan from './pan/Pan';
import Drag from './drag/Drag';
import Pinch from './pinch/Pinch';
import Rotate from './rotate/Rotate';
import Flip from './flip/Flip';
import Shake from './shake/Shake';
import TouchEventStop from './toucheventstop/TouchEventStop';
import Perspective from './perspective/Perspective';
import Skew from './skew/Skew';
import Anchor from './anchor/Anchor';
import TextEdit from './textedit/TextEdit';
import { Fade, FadeIn, FadeOutDestroy } from './fade/Fade.js';
import { EaseMove, EaseMoveTo, EaseMoveFrom } from './easemove/EaseMove';
import { Modal, ModalPromise, ModalClose } from './modal/Modal.js';
import { Maker, YAMLMake as Make } from './maker/index';

import { GetParentSizer, GetTopmostSizer } from './utils/GetParentSizer';
import IsPointerInBounds from '../../plugins/utils/input/IsPointerInBounds';
import {
    Show,
    Hide,
    IsShown,
} from './utils/Hide';
import Edit from './textedit/Edit';
import HiddenEdit from './hiddenedit/HiddenEdit';
import WrapExpandText from './utils/wrapexpandtext/WrapExpandText';
import FontSizeExpandText from './utils/fontsizeexpandtext/FontSizeExpandText';
import SetFontSizeToFitWidth from '../../plugins/utils/text/setfontsizetofitwidth/SetFontSizeToFitWidth';
import { WaitEvent, WaitComplete } from './utils/WaitEvent';
import DelayPromise from '../../plugins/utils/promise/Delay'
import GetViewport from '../../plugins/utils/system/GetViewport';
import SetChildrenInteractive from './utils/setchildreninteractive/SetChildrenInteractive';
import RequestDrag from '../../plugins/utils/input/RequestDrag';

type FontSizeResize = typeof SetFontSizeToFitWidth;

export {
    RoundRectangle,
    RoundRectangleCanvas,
    BBCodeText,
    TagText,
    HiddenEdit,

    Container,
    Canvas,
    CircleMaskImage,
    AlphaMaskImage,
    DynamicText,
    TextPlayer,
    CanvasInput,
    FullWindowRectangle,
    Cover,
    Chart,
    CircularProgress,
    CircularProgressCanvas,
    LineProgress,
    LineProgressCanvas,
    Knob,
    CustomShapes,
    CustomProgress,
    TransitionImage,
    NinePatch,
    NinePatch2,

    Sizer,
    GridSizer,
    FixWidthSizer,
    OverlapSizer,

    Space,
    Label,
    TitleLabel,
    NameValueLabel,
    Buttons,
    GridButtons,
    FixWidthButtons,
    Dialog,
    Choices,
    HolyGrail,
    Tabs,
    Slider,
    GridTable,
    Menu,
    DropDownList,
    TextBox,
    NumberBar,
    ScrollBar,
    BadgeLabel,
    Pages,
    PerspectiveCard,
    TabPages,
    TextArea,
    ScrollablePanel,
    Toast,
    // Sides,

    Click,
    ClickOutside,
    InTouching,
    Tap,
    Press,
    Swipe,
    Pan,
    Drag,
    Pinch,
    Rotate,
    Flip,
    Shake,
    TouchEventStop,
    Perspective,
    Skew,
    Anchor,
    TextEdit,
    Fade, FadeIn, FadeOutDestroy,
    EaseMove, EaseMoveTo, EaseMoveFrom,
    Modal, ModalPromise, ModalClose,
    Maker, Make,

    GetParentSizer,
    GetTopmostSizer,
    IsPointerInBounds,
    Show,
    Hide,
    IsShown,
    Edit,
    WrapExpandText,
    FontSizeExpandText,
    FontSizeResize,  // Backward compatibility
    SetFontSizeToFitWidth,
    WaitEvent,
    WaitComplete,
    DelayPromise,
    GetViewport,
    SetChildrenInteractive,
    RequestDrag
}