export const vi = {
    common: {
        confirm: 'Xác nhận',
        cancel: 'Hủy',
        close: 'Đóng',
        please_wait: 'Vui lòng đợi...',
    },
    date: {
        day: 'Ngày',
        monday: 'Thứ hai',
        tuesday: 'Thứ ba',
        wednesday: 'Thứ tư',
        thursday: 'Thứ năm',
        friday: 'Thứ sáu',
        saturday: 'Thứ bảy',
        sunday: 'Chủ nhật',
    },
    reminder: {
        createModal: {
            heading: 'Tạo Reminder',
            ref_message_caption: (channel?: string) => `Bạn đang tạo reminder cho message${ channel ? ` từ channel **#${channel}**` : '' }:`,
            ref_message_author: (author: string) => `**Người gửi**: ${author}`,
            ref_message_content: (content: string) => `**Nội dung**: ${content || 'Không thể hiển thị...'}`,
            when: 'Remind vào ngày',
            time: 'Lúc',
            repeat: 'Lặp lại',
            repeat_options: {
                once: 'Một lần',
                daily: 'Hàng ngày',
                weekly: 'Hàng tuần',
                weekdays: 'Ngày thường (Thứ 2 - Thứ 6)',
                weekdays_pure: 'Ngày thường (Thứ 2 - Thứ 6)',
                monthly: 'Hàng tháng',
            },
            message: 'Message',
            message_placeholder: 'Trả tiền ăn trưa tháng này :sushi:',
            remind_to: 'Remind đến',
            target_type: 'Channel hoặc cá nhân',
            target_type_options: {
                self: 'Bản thân',
                user: 'Người khác',
                channel: 'Channel',
            },
            target_user: (max: number) => `Người nhận (Tối đa ${max} người)`,
            target_user_placeholder: (max: number) => `Tối đa ${max} người nhận`,
            target_channel: 'Channel',
            target_channel_placeholder: 'Tên Channel',
            create_success: 'Ok, reminder đã được tạo. Yên tâm tôi sẽ nhắc bạn :+1: ',
        },

        listModal: {
            heading: 'List Reminder',
            caption_active: (count: number, paused: number) => `Bạn có **${count}** reminder đang hoạt động${paused ? ` và **${paused}** reminder đang tạm dừng.` : '.'}`,
            caption_finished: (count: number) => `Bạn có **${count}** reminder đã hoàn thành.`,
            no_reminders: 'Tạo reminder mới bằng cách gõ `/reminder`',
            list_active: ':fire: **Các reminder đang hoạt động:**',
            list_paused: ':pause_button: **Các reminder đang tạm dừng:**',
            list_finished: ':white_check_mark: **Các reminder đã hoàn thành:**',
            view_finished: 'Xem reminder đã hoàn thành',
            view_active: 'Xem reminder đang hoạt động',
        },

        jobBlock: {
            title_once: (time: string, target?: string) => `:small_blue_diamond: Nhắc ${target ? target : 'bạn'} vào lúc *${time}*`,
            title_repeat: (time: string, repeat: string, target?: string) => `:small_orange_diamond: Nhắc ${target ? target : 'bạn'} vào lúc *${time}* ${repeat}`,
            next_run_at: (time: string) => `Lần nhắc tiếp theo: *${time}*`,
            message: 'Nội dung',
            button_finished: 'Hoàn thành',
            button_pause: 'Tạm dừng',
            button_resume: ':arrow_forward: Tiếp tục',
            button_cancel: 'Hủy',
            button_remove: 'Xóa',
        },

        message: {
            caption_self: ':rotating_light: Ê, bạn đã nhờ tôi nhắc bạn',
            caption_user: (owner: string) => `:rotating_light: Này, @${owner} nhờ tôi nhắc bạn`,
            caption_channel: (owner: string) => `:rotating_light: Alo alo, @${owner} nhờ tôi nhắc mọi người`,
            caption_ref_msg: (msgLink: string, channel?: string) => ` về [message](${msgLink})${channel ? ` trong #${channel}` : ''} với lời nhắn`,
        },

        messageAction: {
            caption: '- Tạo reminder: `/remind create`\n- Xem danh sách reminder: `/remind list` \n\n Bạn cũng có thể tạo reminder để quote lại một message bằng cách ấn vào nút `⏰ Tạo reminder` ở action cạnh mỗi message.',
            button_create: 'Tạo reminder',
            button_list: 'Xem danh sách reminder',
        },
    },
};

