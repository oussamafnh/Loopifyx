import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../actions/themeActions';
import Button from './button';

const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };


    return (
        <Button onClick={handleThemeToggle}>
            {theme === 'light' ? (
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 0C12.9602 0 13.3333 0.373097 13.3333 0.833333V4.16667C13.3333 4.6269 12.9602 5 12.5 5C12.0398 5 11.6667 4.6269 11.6667 4.16667V0.833333C11.6667 0.373097 12.0398 0 12.5 0ZM3.66117 3.66117C3.9866 3.33573 4.51423 3.33573 4.83968 3.66117L7.1967 6.01818C7.52213 6.34362 7.52213 6.87127 7.1967 7.1967C6.87127 7.52213 6.34362 7.52213 6.01818 7.1967L3.66117 4.83968C3.33573 4.51423 3.33573 3.9866 3.66117 3.66117ZM0.833333 11.6667C0.373097 11.6667 0 12.0398 0 12.5C0 12.9602 0.373097 13.3333 0.833333 13.3333H4.16667C4.6269 13.3333 5 12.9602 5 12.5C5 12.0398 4.6269 11.6667 4.16667 11.6667H0.833333ZM3.66117 21.3388C3.33573 21.0133 3.33573 20.4858 3.66117 20.1603L6.01818 17.8033C6.34362 17.4778 6.87127 17.4778 7.1967 17.8033C7.52213 18.1287 7.52213 18.6563 7.1967 18.9818L4.83968 21.3388C4.51423 21.6643 3.9866 21.6643 3.66117 21.3388ZM20.8333 11.6667C20.3732 11.6667 20 12.0398 20 12.5C20 12.9602 20.3732 13.3333 20.8333 13.3333H24.1667C24.6268 13.3333 25 12.9602 25 12.5C25 12.0398 24.6268 11.6667 24.1667 11.6667H20.8333ZM17.8033 7.1967C17.4778 6.87127 17.4778 6.34362 17.8033 6.01818L20.1603 3.66117C20.4858 3.33573 21.0133 3.33573 21.3388 3.66117C21.6643 3.9866 21.6643 4.51423 21.3388 4.83968L18.9818 7.1967C18.6563 7.52213 18.1287 7.52213 17.8033 7.1967ZM13.3333 20.8333C13.3333 20.3732 12.9602 20 12.5 20C12.0398 20 11.6667 20.3732 11.6667 20.8333V24.1667C11.6667 24.6268 12.0398 25 12.5 25C12.9602 25 13.3333 24.6268 13.3333 24.1667V20.8333ZM17.8033 17.8033C18.1287 17.4778 18.6563 17.4778 18.9818 17.8033L21.3388 20.1603C21.6643 20.4858 21.6643 21.0133 21.3388 21.3388C21.0133 21.6643 20.4858 21.6643 20.1603 21.3388L17.8033 18.9818C17.4778 18.6563 17.4778 18.1287 17.8033 17.8033ZM9.16667 12.5C9.16667 10.659 10.659 9.16667 12.5 9.16667C14.341 9.16667 15.8333 10.659 15.8333 12.5C15.8333 14.341 14.341 15.8333 12.5 15.8333C10.659 15.8333 9.16667 14.341 9.16667 12.5ZM12.5 7.5C9.73858 7.5 7.5 9.73858 7.5 12.5C7.5 15.2614 9.73858 17.5 12.5 17.5C15.2614 17.5 17.5 15.2614 17.5 12.5C17.5 9.73858 15.2614 7.5 12.5 7.5Z" fill="#1C1C1C" />
                </svg>

            ) : (
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.0999 0.814251C5.0999 0.419768 4.7801 0.0999756 4.38563 0.0999756C3.99114 0.0999756 3.67135 0.419768 3.67135 0.814251V1.88567H2.59994C2.20545 1.88567 1.88567 2.20545 1.88567 2.59994C1.88567 2.99442 2.20545 3.31422 2.59994 3.31422H3.67135V4.38563C3.67135 4.7801 3.99114 5.0999 4.38563 5.0999C4.7801 5.0999 5.0999 4.7801 5.0999 4.38563V3.31422H6.17131C6.56579 3.31422 6.88559 2.99442 6.88559 2.59994C6.88559 2.20545 6.56579 1.88567 6.17131 1.88567H5.0999V0.814251ZM10.457 6.17131C10.457 5.77682 10.1372 5.45704 9.74269 5.45704C9.34819 5.45704 9.02841 5.77682 9.02841 6.17131V7.24273H7.957C7.56251 7.24273 7.24273 7.56251 7.24273 7.957C7.24273 8.35148 7.56251 8.67127 7.957 8.67127H9.02841V9.74269C9.02841 10.1372 9.34819 10.457 9.74269 10.457C10.1372 10.457 10.457 10.1372 10.457 9.74269V8.67127H11.5284C11.9228 8.67127 12.2426 8.35148 12.2426 7.957C12.2426 7.56251 11.9228 7.24273 11.5284 7.24273H10.457V6.17131ZM3.31422 11.5284C3.31422 11.1339 2.99442 10.8141 2.59994 10.8141C2.20545 10.8141 1.88567 11.1339 1.88567 11.5284V12.5998H0.814251C0.419768 12.5998 0.0999756 12.9196 0.0999756 13.3141C0.0999756 13.7085 0.419768 14.0283 0.814251 14.0283H1.88567V15.0997C1.88567 15.4942 2.20545 15.814 2.59994 15.814C2.99442 15.814 3.31422 15.4942 3.31422 15.0997V14.0283H4.38563C4.7801 14.0283 5.0999 13.7085 5.0999 13.3141C5.0999 12.9196 4.7801 12.5998 4.38563 12.5998H3.31422V11.5284ZM15.1785 1.67471L14.6465 1.60283C14.2654 1.56013 14.0407 2.00267 14.2594 2.31773C14.5107 2.67996 14.7423 3.05697 14.9525 3.4472C15.8476 5.1086 16.3555 7.00941 16.3555 9.02884C16.3555 14.8712 12.1042 19.7208 6.52647 20.6527C6.09521 20.7247 5.65329 20.7733 5.20722 20.7972C4.82428 20.8175 4.61296 21.2666 4.88067 21.5411C5.00264 21.6663 5.12735 21.7886 5.2547 21.9082L5.38356 22.0273L5.84784 22.4291L6.18356 22.6947L6.39985 22.8555L6.73368 23.0893L7.04775 23.2943C7.26374 23.4302 7.48447 23.5595 7.70984 23.6816L8.18018 23.9232L8.64547 24.1366L9.18625 24.3546L9.62074 24.5078C9.85993 24.5868 10.1025 24.6584 10.3473 24.7219C10.5331 24.7702 10.7207 24.8141 10.9106 24.8536C11.1354 24.9002 11.3626 24.9405 11.5917 24.9743L12.1577 25.0434L12.6344 25.0803C12.8612 25.0934 13.0897 25.1 13.3198 25.1C19.8288 25.1 25.1053 19.8235 25.1053 13.3145C25.1053 12.8685 25.0805 12.4282 25.0323 11.995L24.9666 11.5C24.905 11.1013 24.8234 10.7093 24.723 10.3256C24.6019 9.86252 24.4536 9.41055 24.2798 8.97275L24.078 8.4951L23.9402 8.19885L23.8079 7.93322C23.5243 7.38156 23.1984 6.85518 22.8339 6.35747L22.5607 5.99907L22.2056 5.57193L21.9134 5.24924L21.6999 5.02764L21.4131 4.74719L21.0165 4.38895L20.4434 3.9248L20.0074 3.60886L19.4858 3.26865L18.9115 2.93737L18.327 2.64244L18.1244 2.54955L17.6977 2.36891L17.2032 2.18374L16.7527 2.03677L16.1725 1.87658L15.6998 1.76939L15.1785 1.67471ZM18.4983 9.386C18.4983 7.55683 18.1358 5.81116 17.4791 4.21788C20.9252 5.79627 23.3196 9.27598 23.3196 13.3145C23.3196 18.8372 18.8426 23.3143 13.3198 23.3143C11.7721 23.3143 10.3069 22.9632 8.99907 22.3357C11.6032 21.5177 13.8691 19.9358 15.5341 17.8526C15.7777 18.1862 16.1717 18.4028 16.6163 18.4028C17.356 18.4028 17.9556 17.8031 17.9556 17.0635C17.9556 16.4258 17.5098 15.8921 16.9129 15.7572C17.0237 15.5491 17.1293 15.3379 17.2294 15.1236C17.5704 15.3348 17.9726 15.4568 18.4033 15.4568C19.636 15.4568 20.6354 14.4574 20.6354 13.2247C20.6354 11.9923 19.6365 10.9931 18.4042 10.9926C18.4663 10.4657 18.4983 9.92958 18.4983 9.386Z" fill="white" />
                </svg>

            )}
        </Button>
    );
};

export default ThemeSwitcher;