var main = {
    init : function () {
        var _this = this;
        $('#btn-save').on('click', function() {
            _this.save();
        });

        $('#btn-update1').on('click', function() {
            _this.update1();
        });

        $('#btn-update2').on('click', function() {
            _this.update2();
        });

        $('#btn-delete').on('click', function() {
            _this.delete();
        });

        $('#btn-comment').on('click', function() {
            _this.comment();
        });

        $('#btn-appl').on('click', function() {
            _this.appl();
        });

        $('#btn-gallerycomment').on('click', function() {
            _this.gallerycomment();
        });

        $('#btn-qna').on('click', function() {
            _this.qna();
        });

        $('#btn-userupdate').on('click', function() {
            _this.userupdate();
        });

        $('#btn-userdelete').on('click', function() {
            _this.userdelete();
        });

        $('#btn-mypage-update').on('click', function() {
            _this.mypageupdate();
        });

        $('#btn-mypage-delete').on('click', function() {
            _this.mypagedelete();
        });

        $('#btn-admin-bdelete').on('click', function() {
            _this.adminbdelete();
        });

        $('#btn-gallery').on('click', function() {
            _this.gallery();
        });

        $('#btn-mentorsave').on('click', function() {
            _this.mentorsave();
        });

        $('#btn-mentorupdate1').on('click', function() {
            _this.mentorupdate1();
        });

        $('#btn-mentorupdate2').on('click', function() {
            _this.mentorupdate2();
        });

        $('#btn-mentordelete').on('click', function() {
            _this.mentordelete();
        });

        $('#btn-noticesave').on('click', function() {
            _this.noticesave();
        });

        $('#btn-noticeupdate1').on('click', function() {
            _this.noticeupdate1();
        });

        $('#btn-noticeupdate2').on('click', function() {
            _this.noticeupdate2();
                });

        $('#btn-noticedelete').on('click', function() {
            _this.noticedelete();
        });

    },
    save : function () {
        var data = {
            title: $('#title').val(),
            author: $('#author').val(),
            content: $('#content').val()
        };

        $.ajax({
            type: 'POST',
            url: '/api/v1/posts',
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
            data: JSON.stringify(data)
        }).done(function() {
            alert('?????? ?????????????????????.');
            window.location.href = '/lists';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },
    update1 : function () {
        var data = {
            title: $('#title').val(),
            content: $('#content').val()
        };

        var id = $('#id').val();

        $.ajax({
            type: 'PUT',
            url: '/api/v1/posts/'+id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function() {
            window.location.href = '/posts/update/'+id;
        }).fail(function (error) {
            alert('????????? ?????? ????????? ??? ????????????.');
        });
    },
    update2 : function () {
            var data = {
                title: $('#title').val(),
                content: $('#content').val()
            };

            var id = $('#id').val();

            $.ajax({
                type: 'PUT',
                url: '/api/v1/posts/'+id,
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data)
            }).done(function() {
                window.location.href = '/lists';
            }).fail(function (error) {
                alert('????????? ??????????????????.');
            });
        },

    delete : function () {
        var id = $('#id').val();

        $.ajax({
            type: 'DELETE',
            url: '/api/v1/posts/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
        }).done(function () {
            alert('?????? ?????????????????????.');
            window.location.href = '/lists';
        }).fail(function (error) {
            alert('????????? ?????? ????????? ??? ????????????.');
        });

    },
    comment : function () {

        var data = {
            writer: $('#writer').val(),
            content: $('#content').val()
        };

        var id = $('#id').val();

        $.ajax({
            type: 'POST',
            url: '/api/comments/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
            data: JSON.stringify(data)
        }).done(function () {
            alert('????????? ?????????????????????.');
            window.location.href = '/posts/' + id;
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },

    userupdate : function () {
        var data = {
            name: $('#name').val(),
            email: $('#email').val(),
            picture: $('#picture').val(),
            role: $('#role').val()
        };

        var id = $('#id').val();

        $.ajax({
            type: 'PUT',
            url: '/api/user/role/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function() {
            alert('????????? ?????????????????????.');
            window.location.href = '/admin';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },

    userdelete : function () {
        var id = $('#id').val();

        $.ajax({
            type: 'DELETE',
            url: '/api/user/delete/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
        }).done(function () {
            alert('????????? ???????????????????????????.');
            window.location.href = '/admin';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });

    },

    mypageupdate : function () {
        var data = {
            name: $('#name').val(),
            email: $('#email').val(),
            nickname: $('#nickname').val()
        };

        var id = $('#id').val();

        $.ajax({
            type: 'PUT',
            url: '/api/mypage/update/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function() {
            alert('??????????????? ?????????????????????.');
            window.location.href = '/mypage';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },

    mypagedelete : function () {
        var id = $('#id').val();

        $.ajax({
            type: 'DELETE',
            url: '/api/mypage/delete/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
        }).done(function () {
            alert('????????? ?????????????????????.');
            window.location.href = '/main';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });

    },

    adminbdelete : function () {
        var id = $('#id').val();

        $.ajax({
            type: 'DELETE',
            url: '/api/board/delete/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
        }).done(function () {
            alert('???????????? ?????????????????????.');
            window.location.href = '/admin';
        }).fail(function (error) {
            alert("JSON.stringify(error)");
        });

    },

     gallery : function () {

            var data = {
                writer: $('#writer').val(),
                content: $('#content').val(),
                file: $('#file').val()
            };

            var id = $('#id').val();

            $.ajax({
                type: 'POST',
                url: '/api/category/' + id,
                dataType: 'json',
                contentType: 'application/json; charset=UTF-8',
                data: JSON.stringify(data)
            }).done(function () {
                alert('????????? ?????????????????????.');
                window.location.href = '/category';
            }).fail(function (error) {
                alert('????????? ????????? ?????? ??? ??? ????????????.');
            });
        },

    mentorsave : function () {
        var data = {
            title: $('#title').val(),
            author: $('#author').val(),
            content: $('#content').val(),
            htype: $('#htype').val(),
            career: $('#career').val()
        };

        $.ajax({
            type: 'POST',
            url: '/api/v1/mentor',
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
            data: JSON.stringify(data)
        }).done(function() {
            alert('??????????????? ?????????????????????.');
            window.location.href = '/mentors';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },

    mentorupdate1 : function () {
        var data = {
            title: $('#title').val(),
            content: $('#content').val(),
            htype: $('#htype').val(),
            career: $('#career').val()
        };

        var id = $('#id').val();

        $.ajax({
            type: 'PUT',
            url: '/api/v1/mentor/'+id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function() {
            window.location.href = '/mentors/update/' +id;
        }).fail(function (error) {
            alert('????????? ?????? ????????? ??? ????????????.');
        });
    },

    mentorupdate2 : function () {
            var data = {
                title: $('#title').val(),
                content: $('#content').val(),
                htype: $('#htype').val(),
                career: $('#career').val()
            };

            var id = $('#id').val();

            $.ajax({
                type: 'PUT',
                url: '/api/v1/mentor/'+id,
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data)
            }).done(function() {
                alert('?????? ?????????????????????.');
                window.location.href = '/mentors';
            }).fail(function (error) {
                alert('??? ????????? ??????????????????.');
            });
        },

    mentordelete : function () {
        var id = $('#id').val();

        $.ajax({
            type: 'DELETE',
            url: '/api/v1/mentor/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
        }).done(function () {
            alert('?????? ?????????????????????.');
            window.location.href = '/mentors';
        }).fail(function (error) {
            alert('????????? ?????? ????????? ??? ????????????.');
        });

    },

    noticesave : function () {
            var data = {
                title: $('#title').val(),
                author: $('#author').val(),
                content: $('#content').val()
            };

            $.ajax({
                type: 'POST',
                url: '/api/v1/notice',
                dataType: 'json',
                contentType: 'application/json; charset=UTF-8',
                data: JSON.stringify(data)
            }).done(function() {
                alert('??????????????? ?????????????????????.');
                window.location.href = '/notices';
            }).fail(function (error) {
                alert('???????????? ????????? ??? ????????????.');
            });
        },

    noticeupdate1 : function () {
        var data = {
            title: $('#title').val(),
            content: $('#content').val()
        };

        var id = $('#id').val();

        $.ajax({
            type: 'PUT',
            url: '/api/v1/notice/'+id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function() {
            window.location.href = '/notices/update/' +id;
        }).fail(function (error) {
            alert('???????????? ????????? ??? ????????????.');
        });
    },

    noticeupdate2 : function () {
            var data = {
                title: $('#title').val(),
                content: $('#content').val()
            };

            var id = $('#id').val();

            $.ajax({
                type: 'PUT',
                url: '/api/v1/notice/'+id,
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data)
            }).done(function() {
                alert('?????? ?????????????????????.');
                window.location.href = '/notices';
            }).fail(function (error) {
                alert('????????? ?????????????????????.');
            });
        },


    noticedelete : function () {
        var id = $('#id').val();

        $.ajax({
            type: 'DELETE',
            url: '/api/v1/notice/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
        }).done(function () {
            alert('?????? ?????????????????????.');
            window.location.href = '/notices';
        }).fail(function (error) {
            alert('???????????? ????????? ??? ????????????.');
        });

    },

    gallerycomment : function () {

        var data = {
            writer: $('#writer').val(),
            content: $('#content').val()
        };

        var id = $('#id').val();

        $.ajax({
            type: 'POST',
            url: '/api/gallerycomments/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
            data: JSON.stringify(data)
        }).done(function () {
            alert('????????? ?????????????????????.');
            window.location.href = '/category/'+ id +'/gallery';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },

    qna : function () {

        var data = {
            writer: $('#writer').val(),
            content: $('#content').val()
        };

        var id = $('#id').val();

        $.ajax({
            type: 'POST',
            url: '/api/qna/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
            data: JSON.stringify(data)
        }).done(function () {
            alert('Q/A ????????? ?????????????????????.');
            window.location.href = '/category/'+ id +'/gallery';
        }).fail(function (error) {
            alert('Q/A ????????? ?????????????????????.');
        });
    },

    appl : function () {

        var data = {
            writer: $('#writer').val(),
            content: $('#content').val(),
            title: $('#title').val()
        };

        var id = $('#id').val();

        $.ajax({
            type: 'POST',
            url: '/api/appl/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
            data: JSON.stringify(data)
        }).done(function () {
            alert('????????? ?????????????????????.');
            window.location.href = '/category/'+ id +'/gallery';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },

};

main.init();