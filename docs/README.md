# Hestia CLI Documentation

## Labels

Hint: use Ctrl+F to find them on page

- `{hestia}`: commands that are unique to Hestia and not inherited from Vesta
- `{panel}`: panel-specific commands
- `{dns}`: DNS-specific commands
- `{mail}`: mail-specific commands

## Contents

Hint: command short descriptions are displayed on hover

- [v-acknowledge-user-notification](#v-acknowledge-user-notification "update user notification") 
- [v-add-backup-host](#v-add-backup-host "add backup host") 
- [v-add-cron-hestia-autoupdate](#v-add-cron-hestia-autoupdate "add cron job for hestia autoupdates") 
- [v-add-cron-job](#v-add-cron-job "add cron job") 
- [v-add-cron-letsencrypt-job](#v-add-cron-letsencrypt-job "add letsencrypt cronjob") 
- [v-add-cron-reports](#v-add-cron-reports "add cron reports") 
- [v-add-cron-restart-job](#v-add-cron-restart-job "add cron reports") 
- [v-add-database](#v-add-database "add database") 
- [v-add-database-host](#v-add-database-host "add new database server") 
- [v-add-dns-domain](#v-add-dns-domain "add dns domain") `{dns}` 
- [v-add-dns-on-web-alias](#v-add-dns-on-web-alias "add dns domain or dns record after web domain alias") `{dns}` 
- [v-add-dns-record](#v-add-dns-record "add dns record") `{dns}` 
- [v-add-domain](#v-add-domain "add web/dns/mail domain") 
- [v-add-firewall-ban](#v-add-firewall-ban "add firewall blocking rule") 
- [v-add-firewall-chain](#v-add-firewall-chain "add firewall chain") 
- [v-add-firewall-ipset](#v-add-firewall-ipset "add firewall ipset") `{hestia}` 
- [v-add-firewall-rule](#v-add-firewall-rule "add firewall rule") 
- [v-add-fs-archive](#v-add-fs-archive "archive directory") 
- [v-add-fs-directory](#v-add-fs-directory "add directory") 
- [v-add-fs-file](#v-add-fs-file "add file") 
- [v-add-letsencrypt-domain](#v-add-letsencrypt-domain "check letsencrypt domain") `{web}` 
- [v-add-letsencrypt-host](#v-add-letsencrypt-host "add letsencrypt for host and backend") `{hestia}` 
- [v-add-letsencrypt-user](#v-add-letsencrypt-user "register letsencrypt user account") `{web}` 
- [v-add-mail-account](#v-add-mail-account "add mail domain account") `{mail}` 
- [v-add-mail-account-alias](#v-add-mail-account-alias "add mail account alias aka nickname") `{mail}` 
- [v-add-mail-account-autoreply](#v-add-mail-account-autoreply "add mail account autoreply message") `{mail}` 
- [v-add-mail-account-forward](#v-add-mail-account-forward "add mail account forward address") `{mail}` 
- [v-add-mail-account-fwd-only](#v-add-mail-account-fwd-only "add mail account forward-only flag") `{mail}` 
- [v-add-mail-domain](#v-add-mail-domain "add mail domain") `{mail}` 
- [v-add-mail-domain-antispam](#v-add-mail-domain-antispam "add mail domain antispam support") `{mail}` 
- [v-add-mail-domain-antivirus](#v-add-mail-domain-antivirus "add mail domain antivirus support") `{mail}` 
- [v-add-mail-domain-catchall](#v-add-mail-domain-catchall "add mail domain catchall account") `{mail}` 
- [v-add-mail-domain-dkim](#v-add-mail-domain-dkim "add mail domain dkim support") `{mail}` 
- [v-add-mail-domain-ssl](#v-add-mail-domain-ssl "add mail SSL for $domain") `{hestia}` 
- [v-add-remote-dns-domain](#v-add-remote-dns-domain "add remote dns domain") `{dns}` 
- [v-add-remote-dns-host](#v-add-remote-dns-host "add new remote dns host") `{dns}` 
- [v-add-remote-dns-record](#v-add-remote-dns-record "add remote dns domain record") `{dns}` 
- [v-add-sys-filemanager](#v-add-sys-filemanager "add file manager functionality to Hestia Control Panel") `{hestia}` 
- [v-add-sys-firewall](#v-add-sys-firewall "add system firewall") 
- [v-add-sys-ip](#v-add-sys-ip "add system ip address") 
- [v-add-sys-quota](#v-add-sys-quota "add system quota") 
- [v-add-sys-sftp-jail](#v-add-sys-sftp-jail "add system sftp jail") 
- [v-add-sys-theme](#v-add-sys-theme "install theme from local source or GitHub.") `{hestia}` 
- [v-add-sys-webmail](#v-add-sys-webmail "add webmail support for a domain") `{hestia}` 
- [v-add-user](#v-add-user "add system user") 
- [v-add-user-2fa](#v-add-user-2fa "add 2fa to existing user") `{hestia}` `{panel}` 
- [v-add-user-composer](#v-add-user-composer "add composer (php dependency manager) for a user") `{hestia}` 
- [v-add-user-notification](#v-add-user-notification "add user notification") 
- [v-add-user-package](#v-add-user-package "adding user package") 
- [v-add-user-sftp-jail](#v-add-user-sftp-jail "add user sftp jail") 
- [v-add-user-sftp-key](#v-add-user-sftp-key "add user sftp key") `{hestia}` 
- [v-add-user-ssh-key](#v-add-user-ssh-key "add ssh key") `{hestia}` 
- [v-add-web-domain](#v-add-web-domain "add web domain") `{web}` 
- [v-add-web-domain-alias](#v-add-web-domain-alias "add web domain alias") `{web}` 
- [v-add-web-domain-backend](#v-add-web-domain-backend "add web domain backend") `{web}` 
- [v-add-web-domain-ftp](#v-add-web-domain-ftp "add ftp account for web domain.") `{web}` 
- [v-add-web-domain-httpauth](#v-add-web-domain-httpauth "add password protection for web domain") `{web}` 
- [v-add-web-domain-proxy](#v-add-web-domain-proxy "add webdomain proxy support") `{web}` 
- [v-add-web-domain-ssl](#v-add-web-domain-ssl "adding ssl for domain") `{web}` 
- [v-add-web-domain-ssl-force](#v-add-web-domain-ssl-force "Adding force SSL for a domain") `{hestia}` `{web}` 
- [v-add-web-domain-ssl-hsts](#v-add-web-domain-ssl-hsts "Adding hsts to a domain") `{hestia}` 
- [v-add-web-domain-stats](#v-add-web-domain-stats "add log analyzer to generate domain statitics") `{web}` 
- [v-add-web-domain-stats-user](#v-add-web-domain-stats-user "add password protection to web domain statistics") `{web}` 
- [v-add-web-php](#v-add-web-php "add php fpm version") `{hestia}` 
- [v-backup-user](#v-backup-user "backup system user with all its objects") 
- [v-backup-users](#v-backup-users "backup all users") 
- [v-change-cron-job](#v-change-cron-job "change cron job") 
- [v-change-database-host-password](#v-change-database-host-password "change database server password") 
- [v-change-database-owner](#v-change-database-owner "change database owner") 
- [v-change-database-password](#v-change-database-password "change database password") 
- [v-change-database-user](#v-change-database-user "change database username") 
- [v-change-dns-domain-exp](#v-change-dns-domain-exp "change dns domain expiration date") `{dns}` 
- [v-change-dns-domain-ip](#v-change-dns-domain-ip "change dns domain ip address") `{dns}` 
- [v-change-dns-domain-soa](#v-change-dns-domain-soa "change dns domain soa record") `{dns}` 
- [v-change-dns-domain-tpl](#v-change-dns-domain-tpl "change dns domain template") `{dns}` 
- [v-change-dns-domain-ttl](#v-change-dns-domain-ttl "change dns domain ttl") `{dns}` 
- [v-change-dns-record](#v-change-dns-record "change dns domain record") `{dns}` 
- [v-change-dns-record-id](#v-change-dns-record-id "change dns domain record id") `{dns}` 
- [v-change-domain-owner](#v-change-domain-owner "change domain owner") 
- [v-change-firewall-rule](#v-change-firewall-rule "change firewall rule") 
- [v-change-fs-file-permission](#v-change-fs-file-permission "change file permission") 
- [v-change-mail-account-password](#v-change-mail-account-password "change mail account password") `{mail}` 
- [v-change-mail-account-quota](#v-change-mail-account-quota "change mail account quota") `{mail}` 
- [v-change-mail-domain-catchall](#v-change-mail-domain-catchall "change mail domain catchall email") `{mail}` 
- [v-change-mail-domain-sslcert](#v-change-mail-domain-sslcert "change domain ssl certificate") `{hestia}` 
- [v-change-remote-dns-domain-exp](#v-change-remote-dns-domain-exp "change remote dns domain expiration date") `{dns}` 
- [v-change-remote-dns-domain-soa](#v-change-remote-dns-domain-soa "change remote dns domain SOA") `{dns}` 
- [v-change-remote-dns-domain-ttl](#v-change-remote-dns-domain-ttl "change remote dns domain TTL") `{dns}` 
- [v-change-sys-config-value](#v-change-sys-config-value "change sysconfig value") `{panel}` 
- [v-change-sys-db-alias](#v-change-sys-db-alias "change phpmyadmin/phppgadmin alias url") `{hestia}` 
- [v-change-sys-demo-mode](#v-change-sys-demo-mode "enable or disable demo mode") `{hestia}` 
- [v-change-sys-hestia-ssl](#v-change-sys-hestia-ssl "change hestia ssl certificate") `{panel}` 
- [v-change-sys-hostname](#v-change-sys-hostname "change hostname") `{panel}` 
- [v-change-sys-ip-name](#v-change-sys-ip-name "change ip name") `{panel}` 
- [v-change-sys-ip-nat](#v-change-sys-ip-nat "change ip nat address") `{panel}` 
- [v-change-sys-ip-owner](#v-change-sys-ip-owner "change ip owner") `{panel}` 
- [v-change-sys-ip-status](#v-change-sys-ip-status "change ip status") `{panel}` 
- [v-change-sys-language](#v-change-sys-language "change sys language") `{panel}` 
- [v-change-sys-port](#v-change-sys-port "change system backend port") `{hestia}` `{panel}` 
- [v-change-sys-release](#v-change-sys-release "update web templates") `{hestia}` 
- [v-change-sys-service-config](#v-change-sys-service-config "change service config") `{panel}` 
- [v-change-sys-theme](#v-change-sys-theme "update web templates") `{hestia}` 
- [v-change-sys-timezone](#v-change-sys-timezone "change system timezone") `{panel}` 
- [v-change-sys-webmail](#v-change-sys-webmail "change webmail alias url") `{hestia}` `{panel}` 
- [v-change-user-contact](#v-change-user-contact "change user contact email") `{panel}` 
- [v-change-user-language](#v-change-user-language "change user language") `{panel}` 
- [v-change-user-name](#v-change-user-name "change user full name") `{panel}` 
- [v-change-user-ns](#v-change-user-ns "change user nameservers") `{panel}` 
- [v-change-user-package](#v-change-user-package "change user package") `{panel}` 
- [v-change-user-password](#v-change-user-password "change user password") `{panel}` 
- [v-change-user-php-cli](#v-change-user-php-cli "add php version to .bash_aliases") `{hestia}` 
- [v-change-user-rkey](#v-change-user-rkey "change user password") `{hestia}` 
- [v-change-user-role](#v-change-user-role "updates user role") `{hestia}` 
- [v-change-user-shell](#v-change-user-shell "change user shell") `{panel}` 
- [v-change-user-template](#v-change-user-template "change user default template") `{panel}` 
- [v-change-web-domain-backend-tpl](#v-change-web-domain-backend-tpl "change web domain backend template") `{web}` 
- [v-change-web-domain-dirlist](#v-change-web-domain-dirlist "enable/disable directory listing") `{hestia}` 
- [v-change-web-domain-docroot](#v-change-web-domain-docroot "Changes the document root for an existing web domain") `{hestia}` 
- [v-change-web-domain-ftp-password](#v-change-web-domain-ftp-password "change ftp user password.") `{web}` 
- [v-change-web-domain-ftp-path](#v-change-web-domain-ftp-path "change path for ftp user.") `{web}` 
- [v-change-web-domain-httpauth](#v-change-web-domain-httpauth "change password for http auth user") `{web}` 
- [v-change-web-domain-ip](#v-change-web-domain-ip "change web domain ip") `{web}` 
- [v-change-web-domain-name](#v-change-web-domain-name "change web domain name") `{web}` 
- [v-change-web-domain-proxy-tpl](#v-change-web-domain-proxy-tpl "change web domain proxy template") `{web}` 
- [v-change-web-domain-sslcert](#v-change-web-domain-sslcert "change domain ssl certificate") `{web}` 
- [v-change-web-domain-sslhome](#v-change-web-domain-sslhome "changing domain ssl home") `{web}` 
- [v-change-web-domain-stats](#v-change-web-domain-stats "change web domain statistics") `{web}` 
- [v-change-web-domain-tpl](#v-change-web-domain-tpl "change web domain template") `{web}` 
- [v-check-api-key](#v-check-api-key "check api key") 
- [v-check-fs-permission](#v-check-fs-permission "open file") 
- [v-check-user-2fa](#v-check-user-2fa "check user token") `{hestia}` `{panel}` 
- [v-check-user-hash](#v-check-user-hash "check user hash") 
- [v-check-user-password](#v-check-user-password "check user password") 
- [v-copy-fs-directory](#v-copy-fs-directory "copy directory") 
- [v-copy-fs-file](#v-copy-fs-file "copy file") 
- [v-copy-user-package](#v-copy-user-package "duplicate existing package") `{hestia}` 
- [v-delete-backup-host](#v-delete-backup-host "delete backup ftp server") 
- [v-delete-cron-hestia-autoupdate](#v-delete-cron-hestia-autoupdate "delete hestia autoupdate cron job") 
- [v-delete-cron-job](#v-delete-cron-job "delete cron job") 
- [v-delete-cron-reports](#v-delete-cron-reports "delete cron reports") 
- [v-delete-cron-restart-job](#v-delete-cron-restart-job "delete restart job") 
- [v-delete-database](#v-delete-database "delete database") 
- [v-delete-database-host](#v-delete-database-host "delete database server") 
- [v-delete-databases](#v-delete-databases "delete user databases") 
- [v-delete-dns-domain](#v-delete-dns-domain "delete dns domain") `{dns}` 
- [v-delete-dns-domains](#v-delete-dns-domains "delete dns domains") `{dns}` 
- [v-delete-dns-domains-src](#v-delete-dns-domains-src "delete dns domains based on SRC field") `{dns}` 
- [v-delete-dns-on-web-alias](#v-delete-dns-on-web-alias "delete dns domain or dns record based on web domain alias") `{dns}` 
- [v-delete-dns-record](#v-delete-dns-record "delete dns record") `{dns}` 
- [v-delete-domain](#v-delete-domain "delete web/dns/mail domain") `{panel}` 
- [v-delete-firewall-ban](#v-delete-firewall-ban "delete firewall blocking rule") `{panel}` 
- [v-delete-firewall-chain](#v-delete-firewall-chain "delete firewall chain") `{panel}` 
- [v-delete-firewall-ipset](#v-delete-firewall-ipset "delete firewall ipset") `{hestia}` 
- [v-delete-firewall-rule](#v-delete-firewall-rule "delete firewall rule") `{panel}` 
- [v-delete-fs-directory](#v-delete-fs-directory "delete directory") 
- [v-delete-fs-file](#v-delete-fs-file "delete file") 
- [v-delete-letsencrypt-domain](#v-delete-letsencrypt-domain "deleting letsencrypt ssl cetificate for domain") `{panel}` 
- [v-delete-mail-account](#v-delete-mail-account "delete mail account") `{mail}` 
- [v-delete-mail-account-alias](#v-delete-mail-account-alias "delete mail account alias aka nickname") `{mail}` 
- [v-delete-mail-account-autoreply](#v-delete-mail-account-autoreply "delete mail account autoreply message") `{mail}` 
- [v-delete-mail-account-forward](#v-delete-mail-account-forward "delete mail account forward") `{mail}` 
- [v-delete-mail-account-fwd-only](#v-delete-mail-account-fwd-only "delete mail account forward-only flag") `{mail}` 
- [v-delete-mail-domain](#v-delete-mail-domain "delete mail domain") `{mail}` 
- [v-delete-mail-domain-antispam](#v-delete-mail-domain-antispam "delete mail domain antispam support") `{mail}` 
- [v-delete-mail-domain-antivirus](#v-delete-mail-domain-antivirus "delete mail domain antivirus support") `{mail}` 
- [v-delete-mail-domain-catchall](#v-delete-mail-domain-catchall "delete mail domain catchall email") `{mail}` 
- [v-delete-mail-domain-dkim](#v-delete-mail-domain-dkim "delete mail domain dkim support") `{mail}` 
- [v-delete-mail-domain-ssl](#v-delete-mail-domain-ssl "delete mail domain ssl support") `{hestia}` 
- [v-delete-mail-domains](#v-delete-mail-domains "delete mail domains") `{mail}` 
- [v-delete-remote-dns-domain](#v-delete-remote-dns-domain "delete remote dns domain") `{dns}` 
- [v-delete-remote-dns-domains](#v-delete-remote-dns-domains "delete remote dns domains") `{dns}` 
- [v-delete-remote-dns-host](#v-delete-remote-dns-host "delete remote dns host") `{dns}` 
- [v-delete-remote-dns-record](#v-delete-remote-dns-record "delete remote dns domain record") `{dns}` 
- [v-delete-sys-filemanager](#v-delete-sys-filemanager "remove file manager functionality from Hestia Control Panel") `{hestia}` 
- [v-delete-sys-firewall](#v-delete-sys-firewall "delete system firewall") `{panel}` 
- [v-delete-sys-ip](#v-delete-sys-ip "delete system ip") `{panel}` 
- [v-delete-sys-quota](#v-delete-sys-quota "delete system quota") `{panel}` 
- [v-delete-sys-sftp-jail](#v-delete-sys-sftp-jail "delete system sftp jail") `{panel}` 
- [v-delete-sys-theme](#v-delete-sys-theme "removes a theme from the custom theme library") `{hestia}` 
- [v-delete-sys-webmail](#v-delete-sys-webmail "delete webmail support for a domain") `{hestia}` 
- [v-delete-user](#v-delete-user "delete user") `{panel}` 
- [v-delete-user-2fa](#v-delete-user-2fa "delete 2fa of existing user") `{hestia}` `{panel}` 
- [v-delete-user-backup](#v-delete-user-backup "delete user backup") `{panel}` 
- [v-delete-user-backup-exclusions](#v-delete-user-backup-exclusions "delete backup exclusion") `{panel}` 
- [v-delete-user-ips](#v-delete-user-ips "delete user ips") `{panel}` 
- [v-delete-user-log](#v-delete-user-log "Delete log file for user") `{hestia}` 
- [v-delete-user-notification](#v-delete-user-notification "delete user notification") `{panel}` 
- [v-delete-user-package](#v-delete-user-package "delete user package") `{panel}` 
- [v-delete-user-sftp-jail](#v-delete-user-sftp-jail "delete user sftp jail") `{panel}` 
- [v-delete-user-ssh-key](#v-delete-user-ssh-key "add ssh key") `{hestia}` 
- [v-delete-web-domain](#v-delete-web-domain "delete web domain") `{web}` 
- [v-delete-web-domain-alias](#v-delete-web-domain-alias "delete web domain alias") `{web}` 
- [v-delete-web-domain-backend](#v-delete-web-domain-backend "deleting web domain backend configuration") `{web}` 
- [v-delete-web-domain-ftp](#v-delete-web-domain-ftp "delete webdomain ftp account") `{web}` 
- [v-delete-web-domain-httpauth](#v-delete-web-domain-httpauth "delete http auth user") `{web}` 
- [v-delete-web-domain-proxy](#v-delete-web-domain-proxy "deleting web domain proxy configuration") `{web}` 
- [v-delete-web-domain-ssl](#v-delete-web-domain-ssl "delete web domain SSL support") `{web}` 
- [v-delete-web-domain-ssl-force](#v-delete-web-domain-ssl-force "remove ssl force from domain") `{hestia}` `{web}` 
- [v-delete-web-domain-ssl-hsts](#v-delete-web-domain-ssl-hsts "remove ssl force from domain") `{hestia}` 
- [v-delete-web-domain-stats](#v-delete-web-domain-stats "delete web domain statistics") `{web}` 
- [v-delete-web-domain-stats-user](#v-delete-web-domain-stats-user "disable webdomain stats  authentication support") `{web}` 
- [v-delete-web-domains](#v-delete-web-domains "delete web domains") `{web}` 
- [v-delete-web-php](#v-delete-web-php "delete php fpm version") `{hestia}` 
- [v-download-backup](#v-download-backup "Download backup") `{hestia}` 
- [v-extract-fs-archive](#v-extract-fs-archive "archive to directory") 
- [v-generate-api-key](#v-generate-api-key "generate api key") `{panel}` 
- [v-generate-password-hash](#v-generate-password-hash "generate password hash") `{panel}` 
- [v-generate-ssl-cert](#v-generate-ssl-cert "generate self signed certificate and CSR request") `{panel}` 
- [v-get-dns-domain-value](#v-get-dns-domain-value "get dns domain value") `{dns}` 
- [v-get-fs-file-type](#v-get-fs-file-type "get file type") 
- [v-get-mail-account-value](#v-get-mail-account-value "get mail account value") `{mail}` 
- [v-get-mail-domain-value](#v-get-mail-domain-value "get mail domain value") `{mail}` 
- [v-get-sys-timezone](#v-get-sys-timezone "get system timezone") `{panel}` 
- [v-get-sys-timezones](#v-get-sys-timezones "list system timezone") `{panel}` 
- [v-get-user-salt](#v-get-user-salt "get user salt") `{panel}` 
- [v-get-user-value](#v-get-user-value "get user value") `{panel}` 
- [v-insert-dns-domain](#v-insert-dns-domain "insert dns domain") 
- [v-insert-dns-record](#v-insert-dns-record "insert dns record") 
- [v-insert-dns-records](#v-insert-dns-records "inserts dns records") 
- [v-list-backup-host](#v-list-backup-host "list backup host") `{panel}` 
- [v-list-cron-job](#v-list-cron-job "list cron job") `{panel}` 
- [v-list-cron-jobs](#v-list-cron-jobs "list user cron jobs") `{panel}` 
- [v-list-database](#v-list-database "list database") `{panel}` 
- [v-list-database-host](#v-list-database-host "list database host") `{panel}` 
- [v-list-database-hosts](#v-list-database-hosts "list database hosts") `{panel}` 
- [v-list-database-types](#v-list-database-types "list supported database types") `{panel}` 
- [v-list-databases](#v-list-databases "listing databases") `{panel}` 
- [v-list-dns-domain](#v-list-dns-domain "list dns domain") `{dns}` 
- [v-list-dns-domains](#v-list-dns-domains "list dns domains") `{dns}` 
- [v-list-dns-records](#v-list-dns-records "list dns domain records") `{dns}` 
- [v-list-dns-template](#v-list-dns-template "list dns template") `{dns}` 
- [v-list-dns-templates](#v-list-dns-templates "list dns templates") `{dns}` 
- [v-list-firewall](#v-list-firewall "list iptables rules") 
- [v-list-firewall-ban](#v-list-firewall-ban "list firewall block list") `{panel}` 
- [v-list-firewall-ipset](#v-list-firewall-ipset "List firewall ipset") `{hestia}` 
- [v-list-firewall-rule](#v-list-firewall-rule "list firewall rule") `{panel}` 
- [v-list-fs-directory](#v-list-fs-directory "list directory") 
- [v-list-letsencrypt-user](#v-list-letsencrypt-user "list letsencrypt key") `{panel}` 
- [v-list-mail-account](#v-list-mail-account "list mail domain account") `{mail}` 
- [v-list-mail-account-autoreply](#v-list-mail-account-autoreply "list mail account autoreply") `{mail}` 
- [v-list-mail-accounts](#v-list-mail-accounts "list mail domain accounts") `{mail}` 
- [v-list-mail-domain](#v-list-mail-domain "list mail domain") `{mail}` 
- [v-list-mail-domain-dkim](#v-list-mail-domain-dkim "list mail domain dkim") `{mail}` 
- [v-list-mail-domain-dkim-dns](#v-list-mail-domain-dkim-dns "list mail domain dkim dns records") `{mail}` 
- [v-list-mail-domain-ssl](#v-list-mail-domain-ssl "list mail domain ssl certificate") `{hestia}` 
- [v-list-mail-domains](#v-list-mail-domains "list mail domains") `{mail}` 
- [v-list-remote-dns-hosts](#v-list-remote-dns-hosts "list remote dns host") 
- [v-list-sys-clamd-config](#v-list-sys-clamd-config "list clamd config parameters") 
- [v-list-sys-config](#v-list-sys-config "list system configuration") 
- [v-list-sys-cpu-status](#v-list-sys-cpu-status "list system cpu info") 
- [v-list-sys-db-status](#v-list-sys-db-status "list db status") 
- [v-list-sys-disk-status](#v-list-sys-disk-status "list disk information") 
- [v-list-sys-dns-status](#v-list-sys-dns-status "list dns status") 
- [v-list-sys-dovecot-config](#v-list-sys-dovecot-config "list dovecot config parameters") 
- [v-list-sys-hestia-autoupdate](#v-list-sys-hestia-autoupdate "list hestia autoupdate settings") 
- [v-list-sys-hestia-ssl](#v-list-sys-hestia-ssl "list hestia ssl certificate") 
- [v-list-sys-hestia-updates](#v-list-sys-hestia-updates "list system updates") 
- [v-list-sys-info](#v-list-sys-info "list system os") 
- [v-list-sys-interfaces](#v-list-sys-interfaces "list system interfaces") 
- [v-list-sys-ip](#v-list-sys-ip "list system ip") `{panel}` 
- [v-list-sys-ips](#v-list-sys-ips "list system ips") `{panel}` 
- [v-list-sys-languages](#v-list-sys-languages "list system users") `{panel}` 
- [v-list-sys-mail-status](#v-list-sys-mail-status "list mail status") `{mail}` 
- [v-list-sys-memory-status](#v-list-sys-memory-status "list virtual memory info") `{panel}` 
- [v-list-sys-mysql-config](#v-list-sys-mysql-config "list mysql config parameters") `{panel}` 
- [v-list-sys-network-status](#v-list-sys-network-status "list system network status") 
- [v-list-sys-nginx-config](#v-list-sys-nginx-config "list nginx config parameters") `{panel}` 
- [v-list-sys-pgsql-config](#v-list-sys-pgsql-config "list postgresql config parameters") `{panel}` 
- [v-list-sys-php](#v-list-sys-php "listing availble PHP versions installed") `{hestia}` 
- [v-list-sys-php-config](#v-list-sys-php-config "list php config parameters") `{panel}` 
- [v-list-sys-proftpd-config](#v-list-sys-proftpd-config "list proftpd config parameters") `{panel}` 
- [v-list-sys-rrd](#v-list-sys-rrd "list system rrd charts") `{panel}` 
- [v-list-sys-services](#v-list-sys-services "list system services") 
- [v-list-sys-shells](#v-list-sys-shells "list system shells") 
- [v-list-sys-spamd-config](#v-list-sys-spamd-config "list spamassassin config parameters") `{panel}` 
- [v-list-sys-themes](#v-list-sys-themes "list web templates") `{hestia}` 
- [v-list-sys-users](#v-list-sys-users "list system users") `{panel}` 
- [v-list-sys-vsftpd-config](#v-list-sys-vsftpd-config "list vsftpd config parameters") 
- [v-list-sys-web-status](#v-list-sys-web-status "list web status") 
- [v-list-user](#v-list-user "list user parameters") 
- [v-list-user-backup](#v-list-user-backup "list user backup") 
- [v-list-user-backup-exclusions](#v-list-user-backup-exclusions "list backup exclusions") 
- [v-list-user-backups](#v-list-user-backups "list user backups") 
- [v-list-user-ips](#v-list-user-ips "list user ips") 
- [v-list-user-log](#v-list-user-log "list user log") 
- [v-list-user-notifications](#v-list-user-notifications "list user notifications") 
- [v-list-user-ns](#v-list-user-ns "list user nameservers") 
- [v-list-user-package](#v-list-user-package "list user package") 
- [v-list-user-packages](#v-list-user-packages "list user packages") 
- [v-list-user-ssh-key](#v-list-user-ssh-key "add ssh key") `{hestia}` 
- [v-list-user-stats](#v-list-user-stats "list user stats") `{panel}` 
- [v-list-users](#v-list-users "list users") `{panel}` 
- [v-list-users-stats](#v-list-users-stats "list overall user stats") 
- [v-list-web-domain](#v-list-web-domain "list web domain parameters") `{web}` 
- [v-list-web-domain-accesslog](#v-list-web-domain-accesslog "list web domain access log") `{web}` 
- [v-list-web-domain-errorlog](#v-list-web-domain-errorlog "list web domain error log") `{web}` 
- [v-list-web-domain-ssl](#v-list-web-domain-ssl "list web domain ssl certificate") `{web}` 
- [v-list-web-domains](#v-list-web-domains "list web domains") `{web}` 
- [v-list-web-stats](#v-list-web-stats "list web statistics") `{web}` 
- [v-list-web-templates](#v-list-web-templates "list web templates") `{web}` 
- [v-list-web-templates-backend](#v-list-web-templates-backend "listing backend templates") `{web}` 
- [v-list-web-templates-proxy](#v-list-web-templates-proxy "listing proxy templates") `{web}` 
- [v-move-fs-directory](#v-move-fs-directory "move file") 
- [v-move-fs-file](#v-move-fs-file "move file") 
- [v-open-fs-config](#v-open-fs-config "open config") 
- [v-open-fs-file](#v-open-fs-file "open file") 
- [v-rebuild-all](#v-rebuild-all "rebuild all assets for a specified user") `{hestia}` 
- [v-rebuild-cron-jobs](#v-rebuild-cron-jobs "rebuild cron jobs") `{panel}` 
- [v-rebuild-database](#v-rebuild-database "rebuild databases") `{hestia}` 
- [v-rebuild-databases](#v-rebuild-databases "rebuild databases") `{panel}` 
- [v-rebuild-dns-domain](#v-rebuild-dns-domain "rebuild dns domain") `{dns}` 
- [v-rebuild-dns-domains](#v-rebuild-dns-domains "rebuild dns domains") `{dns}` 
- [v-rebuild-mail-domain](#v-rebuild-mail-domain "rebuild mail domain") `{hestia}` 
- [v-rebuild-mail-domains](#v-rebuild-mail-domains "rebuild mail domains") `{mail}` 
- [v-rebuild-user](#v-rebuild-user "rebuild system user") `{panel}` 
- [v-rebuild-users](#v-rebuild-users "rebuild system user") `{hestia}` 
- [v-rebuild-web-domain](#v-rebuild-web-domain "rebuild web domain") `{hestia}` 
- [v-rebuild-web-domains](#v-rebuild-web-domains "rebuild web domains") 
- [v-refresh-sys-theme](#v-refresh-sys-theme "change active system theme") `{hestia}` 
- [v-rename-package](#v-rename-package "change package name") `{hestia}` 
- [v-restart-cron](#v-restart-cron "restart cron service") `{panel}` 
- [v-restart-dns](#v-restart-dns "restart dns service") `{dns}` 
- [v-restart-ftp](#v-restart-ftp "restart ftp service") `{panel}` 
- [v-restart-mail](#v-restart-mail "restart mail service") `{mail}` 
- [v-restart-proxy](#v-restart-proxy "restart proxy server") `{panel}` 
- [v-restart-service](#v-restart-service "restart service") `{panel}` 
- [v-restart-system](#v-restart-system "restart operating system") `{panel}` 
- [v-restart-web](#v-restart-web "restart web server") `{web}` 
- [v-restart-web-backend](#v-restart-web-backend "restart backend server") `{web}` 
- [v-restore-user](#v-restore-user "restore user") `{panel}` 
- [v-run-cli-cmd](#v-run-cli-cmd "run cli command") `{hestia}` 
- [v-schedule-letsencrypt-domain](#v-schedule-letsencrypt-domain "adding cronjob for letsencrypt cetificate installation") `{panel}` 
- [v-schedule-user-backup](#v-schedule-user-backup "schedule user backup creation") `{panel}` 
- [v-schedule-user-backup-download](#v-schedule-user-backup-download "Schedule a backup") `{hestia}` 
- [v-schedule-user-restore](#v-schedule-user-restore "schedule user backup restoration") `{panel}` 
- [v-search-command](#v-search-command "search for available commands") `{hestia}` 
- [v-search-domain-owner](#v-search-domain-owner "search domain owner") `{panel}` 
- [v-search-fs-object](#v-search-fs-object "search file or directory") 
- [v-search-object](#v-search-object "search objects") `{panel}` 
- [v-search-user-object](#v-search-user-object "search objects") `{panel}` 
- [v-start-service](#v-start-service "start service") `{panel}` 
- [v-stop-firewall](#v-stop-firewall "stop system firewall") `{panel}` 
- [v-stop-service](#v-stop-service "stop service") `{panel}` 
- [v-suspend-cron-job](#v-suspend-cron-job "suspend cron job") `{panel}` 
- [v-suspend-cron-jobs](#v-suspend-cron-jobs "Suspending sys cron jobs") `{panel}` 
- [v-suspend-database](#v-suspend-database "suspend database") `{panel}` 
- [v-suspend-database-host](#v-suspend-database-host "suspend database server") `{panel}` 
- [v-suspend-databases](#v-suspend-databases "suspend databases") `{panel}` 
- [v-suspend-dns-domain](#v-suspend-dns-domain "suspend dns domain") `{dns}` 
- [v-suspend-dns-domains](#v-suspend-dns-domains "suspend dns domains") `{dns}` 
- [v-suspend-dns-record](#v-suspend-dns-record "suspend dns domain record") `{dns}` 
- [v-suspend-domain](#v-suspend-domain "suspend web/dns/mail domain") `{panel}` 
- [v-suspend-firewall-rule](#v-suspend-firewall-rule "suspend firewall rule") `{panel}` 
- [v-suspend-mail-account](#v-suspend-mail-account "suspend mail account") `{mail}` 
- [v-suspend-mail-accounts](#v-suspend-mail-accounts "suspend all mail domain accounts") `{mail}` 
- [v-suspend-mail-domain](#v-suspend-mail-domain "suspend mail domain") `{mail}` 
- [v-suspend-mail-domains](#v-suspend-mail-domains "suspend mail domains") `{mail}` 
- [v-suspend-remote-dns-host](#v-suspend-remote-dns-host "suspend remote dns server") `{dns}` 
- [v-suspend-user](#v-suspend-user "suspend user") `{panel}` 
- [v-suspend-web-domain](#v-suspend-web-domain "suspend web domain") `{web}` 
- [v-suspend-web-domains](#v-suspend-web-domains "suspend web domains") `{web}` 
- [v-sync-dns-cluster](#v-sync-dns-cluster "synchronize dns domains") `{dns}` 
- [v-unsuspend-cron-job](#v-unsuspend-cron-job "unsuspend cron job") `{panel}` 
- [v-unsuspend-cron-jobs](#v-unsuspend-cron-jobs "unsuspend sys cron") `{panel}` 
- [v-unsuspend-database](#v-unsuspend-database "unsuspend database") `{panel}` 
- [v-unsuspend-database-host](#v-unsuspend-database-host "unsuspend database server") `{panel}` 
- [v-unsuspend-databases](#v-unsuspend-databases "unsuspend databases") `{panel}` 
- [v-unsuspend-dns-domain](#v-unsuspend-dns-domain "unsuspend dns domain") `{dns}` 
- [v-unsuspend-dns-domains](#v-unsuspend-dns-domains "unsuspend dns domains") `{dns}` 
- [v-unsuspend-dns-record](#v-unsuspend-dns-record "unsuspend dns domain record") `{dns}` 
- [v-unsuspend-domain](#v-unsuspend-domain "unsuspend web/dns/mail domain") `{panel}` 
- [v-unsuspend-firewall-rule](#v-unsuspend-firewall-rule "unsuspend firewall rule") `{panel}` 
- [v-unsuspend-mail-account](#v-unsuspend-mail-account "unsuspend mail account") `{mail}` 
- [v-unsuspend-mail-accounts](#v-unsuspend-mail-accounts "unsuspend all mail domain accounts") `{mail}` 
- [v-unsuspend-mail-domain](#v-unsuspend-mail-domain "unsuspend mail domain") `{mail}` 
- [v-unsuspend-mail-domains](#v-unsuspend-mail-domains "unsuspend mail domains") `{mail}` 
- [v-unsuspend-remote-dns-host](#v-unsuspend-remote-dns-host "unsuspend remote dns server") `{dns}` 
- [v-unsuspend-user](#v-unsuspend-user "unsuspend user") `{panel}` 
- [v-unsuspend-web-domain](#v-unsuspend-web-domain "unsuspend web domain") `{web}` 
- [v-unsuspend-web-domains](#v-unsuspend-web-domains "unsuspend web domains") `{web}` 
- [v-update-database-disk](#v-update-database-disk "update database disk usage") `{panel}` 
- [v-update-databases-disk](#v-update-databases-disk "update databases disk usage") `{panel}` 
- [v-update-dns-templates](#v-update-dns-templates "update dns templates") `{dns}` 
- [v-update-firewall](#v-update-firewall "update system firewall rules") `{panel}` 
- [v-update-firewall-ipset](#v-update-firewall-ipset "update firewall ipset") `{hestia}` 
- [v-update-host-certificate](#v-update-host-certificate "update host certificate for hestia") `{panel}` 
- [v-update-letsencrypt-ssl](#v-update-letsencrypt-ssl "update letsencrypt ssl certificates") `{panel}` 
- [v-update-mail-domain-disk](#v-update-mail-domain-disk "update mail domain disk usage") `{mail}` 
- [v-update-mail-domains-disk](#v-update-mail-domains-disk "calculate disk usage for all mail domains") `{mail}` 
- [v-update-mail-templates](#v-update-mail-templates "update mail templates") `{hestia}` 
- [v-update-sys-hestia](#v-update-sys-hestia "update hestia package/configs") `{panel}` 
- [v-update-sys-hestia-all](#v-update-sys-hestia-all "update all hestia packages") `{panel}` 
- [v-update-sys-hestia-git](#v-update-sys-hestia-git "Delete log file for user") `{hestia}` 
- [v-update-sys-ip](#v-update-sys-ip "update system ip") `{panel}` 
- [v-update-sys-ip-counters](#v-update-sys-ip-counters "update IP usage counters") `{panel}` 
- [v-update-sys-queue](#v-update-sys-queue "update system queue") `{panel}` 
- [v-update-sys-rrd](#v-update-sys-rrd "update system rrd charts") `{panel}` 
- [v-update-sys-rrd-apache2](#v-update-sys-rrd-apache2 "update apache2 rrd") `{panel}` 
- [v-update-sys-rrd-ftp](#v-update-sys-rrd-ftp "update ftp rrd") `{panel}` 
- [v-update-sys-rrd-httpd](#v-update-sys-rrd-httpd "update httpd rrd") `{panel}` 
- [v-update-sys-rrd-la](#v-update-sys-rrd-la "update load average rrd") `{panel}` 
- [v-update-sys-rrd-mail](#v-update-sys-rrd-mail "update mail rrd") `{panel}` 
- [v-update-sys-rrd-mem](#v-update-sys-rrd-mem "update memory rrd") `{panel}` 
- [v-update-sys-rrd-mysql](#v-update-sys-rrd-mysql "update MySQL rrd") `{panel}` 
- [v-update-sys-rrd-net](#v-update-sys-rrd-net "update network rrd") `{panel}` 
- [v-update-sys-rrd-nginx](#v-update-sys-rrd-nginx "update nginx rrd") `{panel}` 
- [v-update-sys-rrd-pgsql](#v-update-sys-rrd-pgsql "update PostgreSQL rrd") `{panel}` 
- [v-update-sys-rrd-ssh](#v-update-sys-rrd-ssh "update ssh rrd") `{panel}` 
- [v-update-user-backup-exclusions](#v-update-user-backup-exclusions "update backup exclusion list") `{panel}` 
- [v-update-user-counters](#v-update-user-counters "update user usage counters") `{panel}` 
- [v-update-user-disk](#v-update-user-disk "update user disk usage") `{panel}` 
- [v-update-user-package](#v-update-user-package "update user package") `{panel}` 
- [v-update-user-quota](#v-update-user-quota "update user disk quota") `{panel}` 
- [v-update-user-stats](#v-update-user-stats "update user statistics") `{panel}` 
- [v-update-web-domain-disk](#v-update-web-domain-disk "update disk usage for domain") `{web}` 
- [v-update-web-domain-ssl](#v-update-web-domain-ssl "updating ssl certificate for domain") `{web}` 
- [v-update-web-domain-stat](#v-update-web-domain-stat "update domain statistics") `{web}` 
- [v-update-web-domain-traff](#v-update-web-domain-traff "update domain bandwidth usage") `{web}` 
- [v-update-web-domains-disk](#v-update-web-domains-disk "update domains disk usage") `{web}` 
- [v-update-web-domains-stat](#v-update-web-domains-stat "update domains statistics") `{web}` 
- [v-update-web-domains-traff](#v-update-web-domains-traff "update domains bandwidth usage") `{web}` 
- [v-update-web-templates](#v-update-web-templates "update web templates") `{web}` 

## Commands


### v-acknowledge-user-notification

*update user notification*

**Options**: `USER` `NOTIFICATION` 


The function updates user notification.

### v-add-backup-host

*add backup host*

**Options**: `TYPE` `HOST` `USERNAME` `PASSWORD` `[PATH]` `[PORT]` 

**Examples**:
```bash
v-add-backup-host sftp backup.acme.com admin p4$$w@Rd
```

This function adds a backup host

### v-add-cron-hestia-autoupdate

*add cron job for hestia autoupdates*

**Options**: `MODE` 


The function adds cronjob for hestia autoupdate from apt or git.

### v-add-cron-job

*add cron job*

**Options**: `USER` `MIN` `HOUR` `DAY` `MONTH` `WDAY` `COMMAND` `[JOB]` `[RESTART]` 

**Examples**:
```bash
v-add-cronjob admin * * * * * sudo /usr/local/hestia/bin/v-backup-users
```

The function adds a job to cron daemon. When executing commands, any output is mailed to user's email if parameter REPORTS is set to 'yes'.

### v-add-cron-letsencrypt-job

*add letsencrypt cronjob*

**Options**: – 

**Examples**:
```bash
v-add-letsencrypt-job
```

The script for enabling letsencrypt cronjob

### v-add-cron-reports

*add cron reports*

**Options**: `USER` 

**Examples**:
```bash
v-add-cron-reports admin
```

The script for enabling reports on cron tasks and administrative notifications.

### v-add-cron-restart-job

*add cron reports*

**Options**: – 


The script for enabling restart cron tasks

### v-add-database

*add database*

**Options**: `USER` `DATABASE` `DBUSER` `DBPASS` `[TYPE]` `[HOST]` `[CHARSET]` 

**Examples**:
```bash
v-add-database admin wordpress_db matt qwerty123
```

The function creates the database concatenating username and user_db. Supported types of databases you can get using v-list-sys-config script. If the host isn't stated and there are few hosts configured on the server, then the host will be defined by one of three algorithms. "First" will choose the first host in the list. "Random" will chose the host by a chance. "Weight" will distribute new database through hosts evenly. Algorithm and types of supported databases is designated in the main configuration file.

### v-add-database-host

*add new database server*

**Options**: `TYPE` `HOST` `DBUSER` `DBPASS` `[MAX_DB]` `[CHARSETS]` `[TEMPLATE]` `[PORT]` 

**Examples**:
```bash
v-add-database-host mysql localhost alice p@$$wOrd
```

The function add new database server to the server pool. It supports local and remote database servers, which is useful for clusters. By adding a host you can set limit for number of databases on a host. Template parameter is used only for PostgreSQL and has an default value "template1". You can read more about templates in official PostgreSQL documentation.

### v-add-dns-domain
`{dns}` 
*add dns domain*

**Options**: `USER` `DOMAIN` `IP` `[NS1]` `[NS2]` `[NS3]` `[..]` `[NS8]` `[RESTART]` 

**Examples**:
```bash
v-add-dns-domain admin example.com ns1.example.com ns2.example.com yes
```

The function adds DNS zone with records defined in the template. If the exp argument isn't stated, the expiration date value will be set to next year. The soa argument is responsible for the relevant record. By default the first user's NS server is used. TTL is set as common for the zone and for all of its records with a default value of 14400 seconds.

### v-add-dns-on-web-alias
`{dns}` 
*add dns domain or dns record after web domain alias*

**Options**: `USER` `ALIAS` `IP` `[RESTART]` 

**Examples**:
```bash
v-add-dns-on-web-alias admin www.example.com 8.8.8.8
```

The function adds dns domain or dns record based on web domain alias.

### v-add-dns-record
`{dns}` 
*add dns record*

**Options**: `USER` `DOMAIN` `RECORD` `TYPE` `VALUE` `[PRIORITY]` `[ID]` `[RESTART]` `[TTL]` 

**Examples**:
```bash
v-add-dns-record admin acme.com www A 162.227.73.112
```

The call is used for adding new DNS record. Complex records of TXT, MX and SRV types can be used by a filling in the 'value' argument. The function also gets an id parameter for definition of certain record identifier or for the regulation of records.

### v-add-domain

*add web/dns/mail domain*

**Options**: `USER` `DOMAIN` `[IP]` `[RESTART]` 

**Examples**:
```bash
v-add-domain admin example.com
```

The function adds web/dns/mail domain to a server.

### v-add-firewall-ban

*add firewall blocking rule*

**Options**: `IP` `CHAIN` 

**Examples**:
```bash
v-add-firewall-ban 37.120.129.20 MAIL
```

The function adds new blocking rule to system firewall

### v-add-firewall-chain

*add firewall chain*

**Options**: `CHAIN` `[PORT]` `[PROTOCOL]` `[PROTOCOL]` 

**Examples**:
```bash
v-add-firewall-chain CRM 5678 TCP
```

The function adds new rule to system firewall

### v-add-firewall-ipset
`{hestia}` 
*add firewall ipset*

**Options**: `NAME` `[SOURCE]` `[IPVERSION]` `[AUTOUPDATE]` `[FORCE]` 


The function adds new ipset to system firewall

### v-add-firewall-rule

*add firewall rule*

**Options**: `ACTION` `IP` `PORT` `[PROTOCOL]` `[COMMENT]` `[RULE]` 

**Examples**:
```bash
v-add-firewall-rule DROP 185.137.111.77 25
```

The function adds new rule to system firewall

### v-add-fs-archive

*archive directory*

**Options**: `USER` `ARCHIVE` `SOURCE` `[SOURCE...]` 

**Examples**:
```bash
v-add-fs-archive admin archive.tar readme.txt
```

The function creates tar archive

### v-add-fs-directory

*add directory*

**Options**: `USER` `DIRECTORY` 

**Examples**:
```bash
v-add-fs-directory admin mybar
```

The function creates new directory on the file system

### v-add-fs-file

*add file*

**Options**: `USER` `FILE` 

**Examples**:
```bash
v-add-fs-file admin readme.md
```

The function creates new files on file system

### v-add-letsencrypt-domain
`{web}` 
*check letsencrypt domain*

**Options**: `USER` `DOMAIN` `[ALIASES]` `[MAIL]` 

**Examples**:
```bash
v-add-letsencrypt-domain admin wonderland.com www.wonderland.com
```

The function check and validates domain with Let's Encrypt

### v-add-letsencrypt-host
`{hestia}` 
*add letsencrypt for host and backend*

**Options**: – 


The function check and validates the backend certificate and generate a new let's encrypt certificate.

### v-add-letsencrypt-user
`{web}` 
*register letsencrypt user account*

**Options**: `USER` 

**Examples**:
```bash
v-add-letsencrypt-user bob
```

The function creates and register LetsEncrypt account

### v-add-mail-account
`{mail}` 
*add mail domain account*

**Options**: `USER` `DOMAIN` `ACCOUNT` `PASSWORD` `[QUOTA]` 

**Examples**:
```bash
v-add-mail-account john example.com john P4$$vvOrD
```

The function add new email account.

### v-add-mail-account-alias
`{mail}` 
*add mail account alias aka nickname*

**Options**: `USER` `DOMAIN` `ACCOUNT` `ALIAS` 

**Examples**:
```bash
v-add-mail-account-alias admin acme.com alice alicia
```

The function add new email alias.

### v-add-mail-account-autoreply
`{mail}` 
*add mail account autoreply message*

**Options**: `USER` `DOMAIN` `ACCOUNT` `MESSAGE` 

**Examples**:
```bash
v-add-mail-account-autreply admin example.com user Hello from e-mail!
```

The function add new email account.

### v-add-mail-account-forward
`{mail}` 
*add mail account forward address*

**Options**: `USER` `DOMAIN` `ACCOUNT` `FORWARD` 

**Examples**:
```bash
v-add-mail-account-forward admin acme.com alice bob
```

The function add new email account.

### v-add-mail-account-fwd-only
`{mail}` 
*add mail account forward-only flag*

**Options**: `USER` `DOMAIN` `ACCOUNT` 

**Examples**:
```bash
v-add-mail-account-fwd-only admin example.com user
```

The function adds fwd-only flag

### v-add-mail-domain
`{mail}` 
*add mail domain*

**Options**: `USER` `DOMAIN` `[ANTISPAM]` `[ANTIVIRUS]` `[DKIM]` `[DKIM_SIZE]` 

**Examples**:
```bash
v-add-mail-domain admin mydomain.tld
```

The function adds MAIL domain.

### v-add-mail-domain-antispam
`{mail}` 
*add mail domain antispam support*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-add-mail-domain-antispam admin mydomain.tld
```

The function enables spamassasin for incoming emails.

### v-add-mail-domain-antivirus
`{mail}` 
*add mail domain antivirus support*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-add-mail-domain-antivirus admin mydomain.tld
```

The function enables clamav scan for incoming emails.

### v-add-mail-domain-catchall
`{mail}` 
*add mail domain catchall account*

**Options**: `USER` `DOMAIN` `EMAIL` 

**Examples**:
```bash
v-add-mail-domain-catchall admin example.com master@example.com
```

The function enables catchall account for incoming emails.

### v-add-mail-domain-dkim
`{mail}` 
*add mail domain dkim support*

**Options**: `USER` `DOMAIN` `[DKIM_SIZE]` 

**Examples**:
```bash
v-add-mail-domain-dkim admin acme.com
```

The function adds DKIM signature to outgoing domain emails.

### v-add-mail-domain-ssl
`{hestia}` 
*add mail SSL for $domain*

**Options**: `USER` `DOMAIN` `SSL_DIR` `[RESTART]` 


The function turns on SSL support for a mail domain. Parameter ssl_dir is a path to a directory where 2 or 3 ssl files can be found. Certificate file mail.domain.tld.crt and its key mail.domain.tld.key are mandatory. Certificate authority mail.domain.tld.ca file is optional.

### v-add-remote-dns-domain
`{dns}` 
*add remote dns domain*

**Options**: `USER` `DOMAIN` `[FLUSH]` 

**Examples**:
```bash
v-add-remote-dns-domain admin mydomain.tld yes
```

The function synchronize dns domain with the remote server.

### v-add-remote-dns-host
`{dns}` 
*add new remote dns host*

**Options**: `HOST` `PORT` `USER` `PASSWORD` `[TYPE]` `[DNS_USER]` 

**Examples**:
```bash
v-add-remote-dns-host slave.your_host.com 8083 admin your_passw0rd
```

The function adds remote dns server to the dns cluster.

### v-add-remote-dns-record
`{dns}` 
*add remote dns domain record*

**Options**: `USER` `DOMAIN` `ID` 

**Examples**:
```bash
v-add-remote-dns-record bob acme.com 23
```

The function synchronize dns domain with the remote server.

### v-add-sys-filemanager
`{hestia}` 
*add file manager functionality to Hestia Control Panel*

**Options**: `[MODE]` 


The function installs the File Manager on the server for access through the Web interface.

### v-add-sys-firewall

*add system firewall*

**Options**: – 


The script enables firewall

### v-add-sys-ip

*add system ip address*

**Options**: `IP` `NETMASK` `[INTERFACE]` `[USER]` `[IP_STATUS]` `[IP_NAME]` `[NAT_IP]` 

**Examples**:
```bash
v-add-sys-ip 216.239.32.21 255.255.255.0
```

The function adds ip address into a system. It also creates rc scripts. You can specify ip name which will be used as root domain for temporary aliases. For example, if you set a1.myhosting.com as name, each new domain created on this ip will automatically receive alias $domain.a1.myhosting.com. Of course you must have wildcard record \*.a1.myhosting.com pointed to ip. This feature is very handy when customer wants to test domain before dns migration.

### v-add-sys-quota

*add system quota*

**Options**: – 


The script enables filesystem quota on /home partition

### v-add-sys-sftp-jail

*add system sftp jail*

**Options**: `[RESTART]` 


The script enables sftp jailed environment

### v-add-sys-theme
`{hestia}` 
*install theme from local source or GitHub.*

**Options**: `THEME` `[MODE]` `[ACTIVE]` 


The function for installing a custom theme or downloading one from the HestiaCP theme repository.

### v-add-sys-webmail
`{hestia}` 
*add webmail support for a domain*

**Options**: `USER` `DOMAIN` `[RESTART]` `[QUIET]` 


this function adds support for webmail services to a mail domain.

### v-add-user

*add system user*

**Options**: `USER` `PASSWORD` `EMAIL` `[PACKAGE]` `[NAME]` 

**Examples**:
```bash
v-add-user admin2 P4$$w@rD bgates@aol.com
```

The function creates new user account.

### v-add-user-2fa
`{hestia}` `{panel}` 
*add 2fa to existing user*

**Options**: `USER` 

**Examples**:
```bash
v-add-user-2fa admin
```

The function creates a new 2fa token for user.

### v-add-user-composer
`{hestia}` 
*add composer (php dependency manager) for a user*

**Options**: `USER` 


The function adds support for composer (php dependency manager) Homepage: https://getcomposer.org/

### v-add-user-notification

*add user notification*

**Options**: `USER` `TOPIC` `NOTICE` `[TYPE]` 


The function adds user notification.

### v-add-user-package

*adding user package*

**Options**: `PKG_DIR` `PACKAGE` `[REWRITE]` 


The function adds new user package to the system.

### v-add-user-sftp-jail

*add user sftp jail*

**Options**: `USER` `[RESTART]` 

**Examples**:
```bash
v-add-user-sftp-jail admin
```

The script enables sftp jailed environment

### v-add-user-sftp-key
`{hestia}` 
*add user sftp key*

**Options**: `USER` `[TTL]` 


The script creates and updates ssh key for filemanager usage

### v-add-user-ssh-key
`{hestia}` 
*add ssh key*

**Options**: `USER` `KEY` 


Function check if $user/.ssh/authorized_keys exists and create it. After that it append the new key(s)

### v-add-web-domain
`{web}` 
*add web domain*

**Options**: `USER` `DOMAIN` `[IP]` `[ALIASES]` `[PROXY_EXTENSIONS]` `[RESTART]` 

**Examples**:
```bash
v-add-web-domain admin wonderland.com 192.18.22.43 yes www.wonderland.com
```

The function adds virtual host to a server. In cases when ip is undefined in the script, "default" template will be used. The alias of www.domain.tld type will be automatically assigned to the domain unless "none" is transmited as argument. If ip have associated dns name, this domain will also get the alias domain-tpl.$ipname. An alias with the ip name is useful during the site testing while dns isn't moved to server yet.

### v-add-web-domain-alias
`{web}` 
*add web domain alias*

**Options**: `USER` `DOMAIN` `ALIASES` `[RESTART]` 

**Examples**:
```bash
v-add-web-domain-alias admin acme.com www.acme.com yes
```

The call is intended for adding aliases to a domain (it is also called "domain parking"). The function supports wildcards \*.domain.tpl.

### v-add-web-domain-backend
`{web}` 
*add web domain backend*

**Options**: `USER` `DOMAIN` `[TEMPLATE]` `[RESTART]` 

**Examples**:
```bash
v-add-web-domain-backend admin exmaple.com default yes
```

The call is used for adding web backend configuration.

### v-add-web-domain-ftp
`{web}` 
*add ftp account for web domain.*

**Options**: `USER` `DOMAIN` `FTP_USER` `FTP_PASSWORD` `[FTP_PATH]` 

**Examples**:
```bash
v-add-web-domain-ftp alice wonderland.com alice_ftp p4$$vvOrD
```

The function creates additional ftp account for web domain.

### v-add-web-domain-httpauth
`{web}` 
*add password protection for web domain*

**Options**: `USER` `DOMAIN` `AUTH_USER` `AUTH_PASSWORD` `[RESTART]` 

**Examples**:
```bash
v-add-web-domain-httpauth admin acme.com user02 super_pass
```

The call is used for securing web domain with http auth

### v-add-web-domain-proxy
`{web}` 
*add webdomain proxy support*

**Options**: `USER` `DOMAIN` `[TEMPLATE]` `[EXTENTIONS]` `[RESTART]` 

**Examples**:
```bash
v-add-web-domain-proxy admin example.com
```

The function enables proxy support for a domain. This can significantly improve website speed.

### v-add-web-domain-ssl
`{web}` 
*adding ssl for domain*

**Options**: `USER` `DOMAIN` `SSL_DIR` `[SSL_HOME]` `[RESTART]` 

**Examples**:
```bash
v-add-web-domain-ssl admin example.com /home/admin/conf/example.com/web
```

The function turns on SSL support for a domain. Parameter ssl_dir is a path to directory where 2 or 3 ssl files can be found. Certificate file domain.tld.crt and its key domain.tld.key are mandatory. Certificate authority domain.tld.ca file is optional. If home directory parameter (ssl_home) is not set, https domain uses public_shtml as separate documentroot directory.

### v-add-web-domain-ssl-force
`{hestia}` `{web}` 
*Adding force SSL for a domain*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-add-web-domain-ssl-force admin acme.com
```

The function forces SSL for the requested domain.

### v-add-web-domain-ssl-hsts
`{hestia}` 
*Adding hsts to a domain*

**Options**: `USER` `DOMAIN` 


The function enables HSTS for the requested domain.

### v-add-web-domain-stats
`{web}` 
*add log analyzer to generate domain statitics*

**Options**: `USER` `DOMAIN` `TYPE` 

**Examples**:
```bash
v-add-web-domain-stats admin example.com awstats
```

The call is used for enabling log analyzer system to a domain. For viewing the domain statistics use http://domain.tld/vstats/ link. Access this page is not protected by default. If you want to secure it with passwords you should use v-add-web-domain_stat_auth script.

### v-add-web-domain-stats-user
`{web}` 
*add password protection to web domain statistics*

**Options**: `USER` `DOMAIN` `STATS_USER` `STATS_PASSWORD` `[RESTART]` 

**Examples**:
```bash
v-add-web-domain-stats-user admin example.com watchdog your_password
```

The call is used for securing the web statistics page.

### v-add-web-php
`{hestia}` 
*add php fpm version*

**Options**: `VERSION` 


The function checks and delete a fpm php version if not used by any domain.

### v-backup-user

*backup system user with all its objects*

**Options**: `USER` `NOTIFY` 

**Examples**:
```bash
v-backup-user admin yes
```

The call is used for backing up user with all its domains and databases.

### v-backup-users

*backup all users*

**Options**: – 


The function backups all system users.

### v-change-cron-job

*change cron job*

**Options**: `USER` `JOB` `MIN` `HOUR` `DAY` `MONTH` `WDAY` `COMMAND` 

**Examples**:
```bash
v-change-cron-job admin 7 * * * * * * /usr/bin/uptime
```

The function is used for changing existing job. It fully replace job parameters with new one but with same id.

### v-change-database-host-password

*change database server password*

**Options**: `TYPE` `HOST` `USER` `PASSWORD` 

**Examples**:
```bash
v-change-database-host-password mysql localhost wp_user pA$$w@rD
```

The function changes database server password.

### v-change-database-owner

*change database owner*

**Options**: `DATABASE` `USER` 

**Examples**:
```bash
v-change-database-owner mydb alice
```

The function for changing database owner.

### v-change-database-password

*change database password*

**Options**: `USER` `DATABASE` `DBPASS` 

**Examples**:
```bash
v-change-database-password admin wp_db neW_pAssWorD
```

The function for changing database user password to a database. It uses the full name of database as argument.

### v-change-database-user

*change database username*

**Options**: `USER` `DATABASE` `DBUSER` `[DBPASS]` 

**Examples**:
```bash
v-change-database-user admin my_db joe_user
```

The function for changing database user. It uses the

### v-change-dns-domain-exp
`{dns}` 
*change dns domain expiration date*

**Options**: `USER` `DOMAIN` `EXP` 

**Examples**:
```bash
v-change-dns-domain-exp admin domain.pp.ua 2020-11-20
```

The function of changing the term of expiration domain's registration. The serial number will be refreshed automatically during update.

### v-change-dns-domain-ip
`{dns}` 
*change dns domain ip address*

**Options**: `USER` `DOMAIN` `IP` `[RESTART]` 

**Examples**:
```bash
v-change-dns-domain-ip admin domain.com 123.212.111.222
```

The function for changing the main ip of DNS zone.

### v-change-dns-domain-soa
`{dns}` 
*change dns domain soa record*

**Options**: `USER` `DOMAIN` `SOA` `[RESTART]` 

**Examples**:
```bash
v-change-dns-domain-soa admin acme.com d.ns.domain.tld
```

The function for changing SOA record. This type of records can not be modified by v-change-dns-record call.

### v-change-dns-domain-tpl
`{dns}` 
*change dns domain template*

**Options**: `USER` `DOMAIN` `TEMPLATE` `[RESTART]` 

**Examples**:
```bash
v-change-dns-domain-tpl admin example.com child-ns yes
```

The function for changing the template of records. By updating old records will be removed and new records will be generated in accordance with parameters of new template.

### v-change-dns-domain-ttl
`{dns}` 
*change dns domain ttl*

**Options**: `USER` `DOMAIN` `TTL` `[RESTART]` 

**Examples**:
```bash
v-change-dns-domain-ttl alice example.com 14400
```

The function for changing the time to live TTL parameter for all records.

### v-change-dns-record
`{dns}` 
*change dns domain record*

**Options**: `USER` `DOMAIN` `ID` `RECORD` `TYPE` `VALUE` `[PRIORITY]` `[RESTART]` `[TTL]` 

**Examples**:
```bash
v-change-dns-record admin domain.ua 42 192.18.22.43
```

The function for changing DNS record.

### v-change-dns-record-id
`{dns}` 
*change dns domain record id*

**Options**: `USER` `DOMAIN` `ID` `NEWID` `[RESTART]` 

**Examples**:
```bash
v-change-dns-record-id admin acme.com 24 42 yes
```

The function for changing internal record id.

### v-change-domain-owner

*change domain owner*

**Options**: `DOMAIN` `USER` 

**Examples**:
```bash
v-change-domain-owner www.example.com bob
```

The function of changing domain ownership.

### v-change-firewall-rule

*change firewall rule*

**Options**: `RULE` `ACTION` `IP` `PORT` `[PROTOCOL]` `[COMMENT]` 

**Examples**:
```bash
v-change-firewall-rule 3 ACCEPT 5.188.123.17 443
```

The function is used for changing existing firewall rule. It fully replace rule with new one but keeps same id.

### v-change-fs-file-permission

*change file permission*

**Options**: `USER` `FILE` `PERMISSIONS` 

**Examples**:
```bash
v-change-fs-file-permission admin readme.txt 0777
```

The function changes file access permissions on the file system

### v-change-mail-account-password
`{mail}` 
*change mail account password*

**Options**: `USER` `DOMAIN` `ACCOUNT` `PASSWORD` 

**Examples**:
```bash
v-change-mail-account-password admin mydomain.tld user p4$$vvOrD
```

The function changes email account password.

### v-change-mail-account-quota
`{mail}` 
*change mail account quota*

**Options**: `USER` `DOMAIN` `ACCOUNT` `QUOTA` 

**Examples**:
```bash
v-change-mail-account-quota admin mydomain.tld user01 unlimited
```

The function changes email account disk quota.

### v-change-mail-domain-catchall
`{mail}` 
*change mail domain catchall email*

**Options**: `USER` `DOMAIN` `EMAIL` 

**Examples**:
```bash
v-change-mail-domain-catchall user01 mydomain.tld master@mydomain.tld
```

The function changes mail domain catchall.

### v-change-mail-domain-sslcert
`{hestia}` 
*change domain ssl certificate*

**Options**: `USER` `DOMAIN` `SSL_DIR` `[RESTART]` 


The function changes SSL domain certificate and the key. If ca file present it will be replaced as well.

### v-change-remote-dns-domain-exp
`{dns}` 
*change remote dns domain expiration date*

**Options**: `USER` `DOMAIN` 


The function synchronize dns domain with the remote server.

### v-change-remote-dns-domain-soa
`{dns}` 
*change remote dns domain SOA*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-change-remote-dns-domain-soa admin example.org.uk
```

The function synchronize dns domain with the remote server.

### v-change-remote-dns-domain-ttl
`{dns}` 
*change remote dns domain TTL*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-change-remote-dns-domain-ttl admin domain.tld
```

The function synchronize dns domain with the remote server.

### v-change-sys-config-value
`{panel}` 
*change sysconfig value*

**Options**: `KEY` `VALUE` 

**Examples**:
```bash
v-change-sys-config-value VERSION 1.0
```

The function is for changing main config settings such as COMPANY_NAME or COMPANY_EMAIL and so on.

### v-change-sys-db-alias
`{hestia}` 
*change phpmyadmin/phppgadmin alias url*

**Options**: `TYPE` `ALIAS` 

**Examples**:
```bash
v-change-sys-db-alias pma phpmyadmin
# Sets phpMyAdmin alias to phpmyadmin
```
```bash
v-change-sys-db-alias pga phppgadmin
# Sets phpPgAdmin alias to phppgadmin
```

This function changes the database editor url in apache2 or nginx configuration.

### v-change-sys-demo-mode
`{hestia}` 
*enable or disable demo mode*

**Options**: `ACTIVE` 


This function will set the demo mode variable, which will prevent usage of certain v-scripts in the backend and prevent modification of objects in the control panel. It will also disable virtual hosts for Apache and NGINX for domains which have been created.

### v-change-sys-hestia-ssl
`{panel}` 
*change hestia ssl certificate*

**Options**: `SSL_DIR` `[RESTART]` 

**Examples**:
```bash
v-change-hestia-ssl /home/new/dir/path yes
```

The function changes hestia SSL certificate and the key.

### v-change-sys-hostname
`{panel}` 
*change hostname*

**Options**: `HOSTNAME` 

**Examples**:
```bash
v-change-sys-hostname mydomain.tld
```

The function for changing system hostname.

### v-change-sys-ip-name
`{panel}` 
*change ip name*

**Options**: `IP` `NAME` 

**Examples**:
```bash
v-change-sys-ip-name 80.122.52.70 acme.com
```

The function for changing dns domain associated with ip.

### v-change-sys-ip-nat
`{panel}` 
*change ip nat address*

**Options**: `IP` `NAT_IP` `[RESTART]` 

**Examples**:
```bash
185.209.50.140 10.110.104.205
```

The function for changing nat ip associated with ip.

### v-change-sys-ip-owner
`{panel}` 
*change ip owner*

**Options**: `IP` `USER` 

**Examples**:
```bash
91.198.136.14 admin
```

The function of changing ip address ownership.

### v-change-sys-ip-status
`{panel}` 
*change ip status*

**Options**: `IP` `IP_STATUS` 

**Examples**:
```bash
91.198.136.14 yourstatus
```

The function of changing an ip address's status.

### v-change-sys-language
`{panel}` 
*change sys language*

**Options**: `LANGUAGE` `[UPDATE_USERS]` 

**Examples**:
```bash
v-change-sys-language ru
```

The function for changing system language.

### v-change-sys-port
`{hestia}` `{panel}` 
*change system backend port*

**Options**: `PORT` 

**Examples**:
```bash
v-change-sys-port 5678
```

The function for changing the system backend port in NGINX configuration.

### v-change-sys-release
`{hestia}` 
*update web templates*

**Options**: `[RESTART]` 


The function for changing the release branch for the Hestia Control Panel. This allows the user to switch between stable and pre-release builds which will automaticlly update based on the appropriate release schedule if auto-update is turned on.

### v-change-sys-service-config
`{panel}` 
*change service config*

**Options**: `CONFIG` `SERVICE` `[RESTART]` 

**Examples**:
```bash
v-change-sys-service-config /home/admin/dovecot.conf dovecot yes
```

The function for changing service confguration.

### v-change-sys-theme
`{hestia}` 
*update web templates*

**Options**: `THEME` 


The function for changing the currently active system theme.

### v-change-sys-timezone
`{panel}` 
*change system timezone*

**Options**: `TIMEZONE` 

**Examples**:
```bash
v-change-sys-timezone Europe/Berlin
```

The function for changing system timezone.

### v-change-sys-webmail
`{hestia}` `{panel}` 
*change webmail alias url*

**Options**: `WEBMAIL` 

**Examples**:
```bash
v-change-sys-webmail YourtrickyURLhere
```

This function changes the webmail url in apache2 or nginx configuration.

### v-change-user-contact
`{panel}` 
*change user contact email*

**Options**: `USER` `EMAIL` 

**Examples**:
```bash
v-change-user-contact admin admin@yahoo.com
```

The function for changing of e-mail associated with a certain user.

### v-change-user-language
`{panel}` 
*change user language*

**Options**: `USER` `LANGUAGE` 

**Examples**:
```bash
v-change-user-language admin en
```

The function for changing language.

### v-change-user-name
`{panel}` 
*change user full name*

**Options**: `USER` `NAME` `[LAST_NAME]` 

**Examples**:
```bash
v-change-user-name admin John Smith
```

The function allow to change user's full name.

### v-change-user-ns
`{panel}` 
*change user nameservers*

**Options**: `USER` `NS1` `NS2` `[NS3]` `[NS4]` `[NS5]` `[NS6]` `[NS7]` `[NS8]` 

**Examples**:
```bash
v-change-user-ns ns1.domain.tld ns2.domain.tld
```

The function for changing default nameservers for specific user.

### v-change-user-package
`{panel}` 
*change user package*

**Options**: `USER` `PACKAGE` `[FORCE]` 

**Examples**:
```bash
v-change-user-package admin yourpackage
```

The function changes user's hosting package.

### v-change-user-password
`{panel}` 
*change user password*

**Options**: `USER` `PASSWORD` 

**Examples**:
```bash
v-change-user-password admin NewPassword123
```

The function changes user's password and updates RKEY value.

### v-change-user-php-cli
`{hestia}` 
*add php version to .bash_aliases*

**Options**: `USER` `VERSION` 


add line to .bash_aliases to set default php incase of multiPHP

### v-change-user-rkey
`{hestia}` 
*change user password*

**Options**: `USER` 


The function changes user's password and updates RKEY value.

### v-change-user-role
`{hestia}` 
*updates user role*

**Options**: `USER` `ROLE` 


The function changes user's role.

### v-change-user-shell
`{panel}` 
*change user shell*

**Options**: `USER` `SHELL` 

**Examples**:
```bash
v-change-user-shell admin nologin
```

The function changes system shell of a user. Shell gives ability to use ssh.

### v-change-user-template
`{panel}` 
*change user default template*

**Options**: `USER` `TYPE` `TEMPLATE` 

**Examples**:
```bash
v-change-user-template admin WEB wordpress
```

The function changes default user web template.

### v-change-web-domain-backend-tpl
`{web}` 
*change web domain backend template*

**Options**: `USER` `DOMAIN` `TEMPLATE` `[RESTART]` 

**Examples**:
```bash
v-change-web-domain-backend-tpl admin acme.com socket
```

The function changes backend template

### v-change-web-domain-dirlist
`{hestia}` 
*enable/disable directory listing*

**Options**: `USER` `DOMAIN` `MODE` 


The call is used for changing the directory list mode.

### v-change-web-domain-docroot
`{hestia}` 
*Changes the document root for an existing web domain*

**Options**: `USER` `DOMAIN` `TARGET_DOMAIN` `[DIRECTORY]` `[PHP]` 

**Examples**:
```bash
v-change-web-domain-docroot admin domain.tld otherdomain.tld
# add custom docroot
# points domain.tld to otherdomain.tld's document root.
```
```bash
v-change-web-domain-docroot admin test.local default
# remove custom docroot
# returns document root to default value for domain.
```

This call changes the document root of a chosen web domain to another available domain under the user context.

### v-change-web-domain-ftp-password
`{web}` 
*change ftp user password.*

**Options**: `USER` `DOMAIN` `FTP_USER` `FTP_PASSWORD` 

**Examples**:
```bash
v-change-web-domain-ftp-password admin example.com ftp_usr ftp_qwerty
```

The function changes ftp user password.

### v-change-web-domain-ftp-path
`{web}` 
*change path for ftp user.*

**Options**: `USER` `DOMAIN` `FTP_USER` `FTP_PATH` 

**Examples**:
```bash
v-change-web-domain-ftp-path admin example.com /home/admin/example.com
```

The function changes ftp user path.

### v-change-web-domain-httpauth
`{web}` 
*change password for http auth user*

**Options**: `USER` `DOMAIN` `AUTH_USER` `AUTH_PASSWORD` `[RESTART]` 

**Examples**:
```bash
v-change-web-domain-httpauth admin acme.com alice white_rA$$bIt
```

The call is used for changing http auth user password

### v-change-web-domain-ip
`{web}` 
*change web domain ip*

**Options**: `USER` `DOMAIN` `DOMAIN` `[RESTART]` 

**Examples**:
```bash
v-change-web-domain-ip admin example.com 167.86.105.230 yes
```

The call is used for changing domain ip

### v-change-web-domain-name
`{web}` 
*change web domain name*

**Options**: `USER` `DOMAIN` `NEW_DOMAIN` `[RESTART]` 

**Examples**:
```bash
v-change-web-domain-name alice wonderland.com lookinglass.com yes
```

The call is used for changing the domain name.

### v-change-web-domain-proxy-tpl
`{web}` 
*change web domain proxy template*

**Options**: `USER` `DOMAIN` `TEMPLATE` `[EXTENTIONS]` `[RESTART]` 

**Examples**:
```bash
v-change-web-domain-proxy-tpl admin domain.tld hosting
```

The function changes proxy template

### v-change-web-domain-sslcert
`{web}` 
*change domain ssl certificate*

**Options**: `USER` `DOMAIN` `SSL_DIR` `[RESTART]` 

**Examples**:
```bash
v-change-web-domain-sslcert admin example.com /home/admin/tmp
```

The function changes SSL domain certificate and the key. If ca file present it will be replaced as well.

### v-change-web-domain-sslhome
`{web}` 
*changing domain ssl home*

**Options**: `USER` `DOMAIN` `SSL_HOME` `[RESTART]` 

**Examples**:
```bash
v-change-web-domain-sslhome admin acme.com /home/admin/acme.com/public_shtml
```

The function changes SSL home directory.

### v-change-web-domain-stats
`{web}` 
*change web domain statistics*

**Options**: `USER` `DOMAIN` `TYPE` 

**Examples**:
```bash
v-change-web-domain-stats admin example.com awstats
```

The function of deleting site's system of statistics. Its type is automatically chooses from client's configuration file.

### v-change-web-domain-tpl
`{web}` 
*change web domain template*

**Options**: `USER` `DOMAIN` `TEMPLATE` `[RESTART]` 

**Examples**:
```bash
v-change-web-domain-tpl admin acme.com opencart
```

The function changes template of the web configuration file. The content of webdomain directories remains untouched.

### v-check-api-key

*check api key*

**Options**: `KEY` `[IP]` 


The function checks a key file in $HESTIA/data/keys/

### v-check-fs-permission

*open file*

**Options**: `USER` `FILE` 

**Examples**:
```bash
v-check-fs-permission admin readme.txt
```

The function opens/reads files on the file system

### v-check-user-2fa
`{hestia}` `{panel}` 
*check user token*

**Options**: `USER` `TOKEN` 

**Examples**:
```bash
v-check-user-2fa admin 493690
```

The function verifies user 2fa token.

### v-check-user-hash

*check user hash*

**Options**: `USER` `HASH` `[IP]` 

**Examples**:
```bash
v-check-user-hash admin CN5JY6SMEyNGnyCuvmK5z4r7gtHAC4mRZ...
```

The function verifies user hash

### v-check-user-password

*check user password*

**Options**: `USER` `PASSWORD` `[IP]` 

**Examples**:
```bash
v-check-user-password admin qwerty1234
```

The function verifies user password from file

### v-copy-fs-directory

*copy directory*

**Options**: `USER` `SRC_DIRECTORY` `DST_DIRECTORY` 

**Examples**:
```bash
v-copy-fs-directory alice /home/alice/dir1 /home/bob/dir2
```

The function copies directory on the file system

### v-copy-fs-file

*copy file*

**Options**: `USER` `SRC_FILE` `DST_FILE` 

**Examples**:
```bash
v-copy-fs-file admin readme.txt readme_new.txt
```

The function copies file on the file system

### v-copy-user-package
`{hestia}` 
*duplicate existing package*

**Options**: `PACKAGE` `NEW_PACKAGE` 


The function allows the user to duplicate an existing package file to facilitate easier configuration.

### v-delete-backup-host

*delete backup ftp server*

**Options**: `TYPE` `[HOST]` 

**Examples**:
```bash
v-delete-backup-host sftp
```

The function deletes ftp backup host

### v-delete-cron-hestia-autoupdate

*delete hestia autoupdate cron job*

**Options**: – 


The function deletes hestia autoupdate cron job.

### v-delete-cron-job

*delete cron job*

**Options**: `USER` `JOB` 

**Examples**:
```bash
v-delete-cron-job admin 9
```

The function deletes cron job.

### v-delete-cron-reports

*delete cron reports*

**Options**: `USER` 

**Examples**:
```bash
v-delete-cron-reports admin
```

The script for disabling reports on cron tasks and administrative notifications.

### v-delete-cron-restart-job

*delete restart job*

**Options**: – 


The script for disabling restart cron tasks

### v-delete-database

*delete database*

**Options**: `USER` `DATABASE` 

**Examples**:
```bash
v-delete-database admin wp_db
```

The function for deleting the database. If database user have access to another database, he will not be deleted.

### v-delete-database-host

*delete database server*

**Options**: `TYPE` `HOST` 

**Examples**:
```bash
v-delete-database-host pgsql localhost
```

The function for deleting the database host from hestia configuration. It will be deleted if there are no databases created on it only.

### v-delete-databases

*delete user databases*

**Options**: `USER` 

**Examples**:
```bash
v-delete-databases admin
```

The function deletes all user databases.

### v-delete-dns-domain
`{dns}` 
*delete dns domain*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-delete-dns-domain alice acme.com
```

The function for deleting DNS domain. By deleting it all records will also be deleted.

### v-delete-dns-domains
`{dns}` 
*delete dns domains*

**Options**: `USER` `[RESTART]` 

**Examples**:
```bash
v-delete-dns-domains bob
```

The function for deleting all users DNS domains.

### v-delete-dns-domains-src
`{dns}` 
*delete dns domains based on SRC field*

**Options**: `USER` `SRC` `[RESTART]` 

**Examples**:
```bash
v-delete-dns-domain-src admin '' yes
```

The function for deleting DNS domains related to a certain host.

### v-delete-dns-on-web-alias
`{dns}` 
*delete dns domain or dns record based on web domain alias*

**Options**: `USER` `DOMAIN` `ALIAS` `[RESTART]` 

**Examples**:
```bash
v-delete-dns-on-web-alias admin example.com www.example.com
```

The function deletes dns domain or dns record based on web domain alias.

### v-delete-dns-record
`{dns}` 
*delete dns record*

**Options**: `USER` `DOMAIN` `ID` `[RESTART]` 

**Examples**:
```bash
v-delete-dns-record bob acme.com 42 yes
```

The function for deleting a certain record of DNS zone.

### v-delete-domain
`{panel}` 
*delete web/dns/mail domain*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-delete-domain admin domain.tld
```

The function deletes web/dns/mail domain.

### v-delete-firewall-ban
`{panel}` 
*delete firewall blocking rule*

**Options**: `IP` `CHAIN` 

**Examples**:
```bash
v-delete-firewall-ban 198.11.130.250 MAIL
```

The function deletes blocking rule from system firewall

### v-delete-firewall-chain
`{panel}` 
*delete firewall chain*

**Options**: `CHAIN` 

**Examples**:
```bash
v-delete-firewall-chain WEB
```

The function adds new rule to system firewall

### v-delete-firewall-ipset
`{hestia}` 
*delete firewall ipset*

**Options**: `NAME` 


The function removes ipset from system and from hestia

### v-delete-firewall-rule
`{panel}` 
*delete firewall rule*

**Options**: `RULE` 

**Examples**:
```bash
v-delete-firewall-rule SSH_BLOCK
```

The function deletes firewall rule.

### v-delete-fs-directory

*delete directory*

**Options**: `USER` `DIRECTORY` 

**Examples**:
```bash
v-delete-fs-directory admin report1
```

The function deletes directory on the file system

### v-delete-fs-file

*delete file*

**Options**: `USER` `FILE` 

**Examples**:
```bash
v-delete-fs-file admin readme.txt
```

The function deletes file on the file system

### v-delete-letsencrypt-domain
`{panel}` 
*deleting letsencrypt ssl cetificate for domain*

**Options**: `USER` `DOMAIN` `[RESTART]` `[MAIL]` 

**Examples**:
```bash
v-delete-letsencrypt-domain admin acme.com yes
```

The function turns off letsencrypt SSL support for a domain.

### v-delete-mail-account
`{mail}` 
*delete mail account*

**Options**: `USER` `DOMAIN` `ACCOUNT` 

**Examples**:
```bash
v-delete-mail-account admin acme.com alice
```

The function deletes email account.

### v-delete-mail-account-alias
`{mail}` 
*delete mail account alias aka nickname*

**Options**: `USER` `DOMAIN` `ACCOUNT` `ALIAS` 

**Examples**:
```bash
v-delete-mail-account-alias admin example.com alice alicia
```

The function deletes email account alias.

### v-delete-mail-account-autoreply
`{mail}` 
*delete mail account autoreply message*

**Options**: `USER` `DOMAIN` `ACCOUNT` `ALIAS` 

**Examples**:
```bash
v-delete-mail-account-autoreply admin mydomain.tld bob
```

The function delete email account autoreply.

### v-delete-mail-account-forward
`{mail}` 
*delete mail account forward*

**Options**: `USER` `DOMAIN` `ACCOUNT` `EMAIL` 

**Examples**:
```bash
v-delete-mail-account-forward admin acme.com tony bob@acme.com
```

The function add delete email account forward address.

### v-delete-mail-account-fwd-only
`{mail}` 
*delete mail account forward-only flag*

**Options**: `USER` `DOMAIN` `ACCOUNT` 

**Examples**:
```bash
v-delete-mail-accont-fwd-only admin example.com jack
```

The function deletes fwd-only flag

### v-delete-mail-domain
`{mail}` 
*delete mail domain*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-delete-mail-domain admin mydomain.tld
```

The function for deleting MAIL domain. By deleting it all accounts will also be deleted.

### v-delete-mail-domain-antispam
`{mail}` 
*delete mail domain antispam support*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-delete-mail-domain-antispam admin mydomain.tld
```

The function disable spamassasin for incoming emails.

### v-delete-mail-domain-antivirus
`{mail}` 
*delete mail domain antivirus support*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-delete-mail-domain-antivirus admin mydomain.tld
```

The function disables clamav scan for incoming emails.

### v-delete-mail-domain-catchall
`{mail}` 
*delete mail domain catchall email*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-delete-mail-domain-catchall admin mydomain.tld
```

The function disables mail domain cathcall.

### v-delete-mail-domain-dkim
`{mail}` 
*delete mail domain dkim support*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-delete-mail-domain-dkim admin mydomain.tld
```

The function delete DKIM domain pem.

### v-delete-mail-domain-ssl
`{hestia}` 
*delete mail domain ssl support*

**Options**: `USER` `DOMAIN` 


The function delete ssl certificates.

### v-delete-mail-domains
`{mail}` 
*delete mail domains*

**Options**: `USER` 

**Examples**:
```bash
v-delete-mail-domains admin
```

The function for deleting all users mail domains.

### v-delete-remote-dns-domain
`{dns}` 
*delete remote dns domain*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-delete-remote-dns-domain admin example.tld
```

The function synchronize dns with the remote server.

### v-delete-remote-dns-domains
`{dns}` 
*delete remote dns domains*

**Options**: `[HOST]` 


The function deletes remote dns domains.

### v-delete-remote-dns-host
`{dns}` 
*delete remote dns host*

**Options**: `HOST` 

**Examples**:
```bash
v-delete-remote-dns-host example.org
```

The function for deleting the remote dns host from hestia configuration.

### v-delete-remote-dns-record
`{dns}` 
*delete remote dns domain record*

**Options**: `USER` `DOMAIN` `ID` 

**Examples**:
```bash
v-delete-remote-dns-record user07 acme.com 44
```

The function synchronize dns with the remote server.

### v-delete-sys-filemanager
`{hestia}` 
*remove file manager functionality from Hestia Control Panel*

**Options**: `[FULL]` 


The function removes the File Manager and its entry points

### v-delete-sys-firewall
`{panel}` 
*delete system firewall*

**Options**: – 


The script disables firewall support

### v-delete-sys-ip
`{panel}` 
*delete system ip*

**Options**: `IP` 

**Examples**:
```bash
v-delete-sys-ip 212.42.76.210
```

The function for deleting a system ip. It does not allow to delete first ip on interface and do not allow to delete ip which is used by a web domain.

### v-delete-sys-quota
`{panel}` 
*delete system quota*

**Options**: – 


The script disables filesystem quota on /home partition

### v-delete-sys-sftp-jail
`{panel}` 
*delete system sftp jail*

**Options**: – 


The script disables sftp jailed environment

### v-delete-sys-theme
`{hestia}` 
*removes a theme from the custom theme library*

**Options**: `[RESTART]` 


The function removes a theme from the custom theme library.

### v-delete-sys-webmail
`{hestia}` 
*delete webmail support for a domain*

**Options**: `USER` `DOMAIN` `[RESTART]` `[QUIET]` 


this function removes support for webmail from a specified mail domain.

### v-delete-user
`{panel}` 
*delete user*

**Options**: `USER` `[RESTART]` 

**Examples**:
```bash
v-delete-user whistler
```

This function deletes a certain user and all his resources such as domains, databases, cron jobs, etc.

### v-delete-user-2fa
`{hestia}` `{panel}` 
*delete 2fa of existing user*

**Options**: `USER` 

**Examples**:
```bash
v-delete-user-2fa admin
```

The function deletes 2fa token of a user.

### v-delete-user-backup
`{panel}` 
*delete user backup*

**Options**: `USER` `BACKUP` 

**Examples**:
```bash
v-delete-user-backup admin.2012-12-21_00-10-00.tar
```

The function deletes user backup.

### v-delete-user-backup-exclusions
`{panel}` 
*delete backup exclusion*

**Options**: `USER` `[SYSTEM]` 

**Examples**:
```bash
v-delete-user-backup-exclusions admin
```

The function for deleting backup exclusion

### v-delete-user-ips
`{panel}` 
*delete user ips*

**Options**: `USER` 

**Examples**:
```bash
v-delete-user-ips admin
```

The function deletes all user's ip addresses.

### v-delete-user-log
`{hestia}` 
*Delete log file for user*

**Options**: `USER` 


The function for deleting a users log file

### v-delete-user-notification
`{panel}` 
*delete user notification*

**Options**: `USER` `NOTIFICATION` 

**Examples**:
```bash
admin "Hello, admin!"
```

The function deletes user notification.

### v-delete-user-package
`{panel}` 
*delete user package*

**Options**: `PACKAGE` 

**Examples**:
```bash
v-delete-user-package admin palegreen
```

The function for deleting user package. It does not allow to delete package if it is in use.

### v-delete-user-sftp-jail
`{panel}` 
*delete user sftp jail*

**Options**: `USER` 

**Examples**:
```bash
v-delete-user-sftp-jail whistler
```

The script disables sftp jailed environment for USER

### v-delete-user-ssh-key
`{hestia}` 
*add ssh key*

**Options**: `USER` `KEY` 


Function check if $user/.ssh/authorized_keys exists and create it. After that it append the new key(s)

### v-delete-web-domain
`{web}` 
*delete web domain*

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:
```bash
v-delete-web-domain admin wonderland.com
```

The call of function leads to the removal of domain and all its components (statistics, folders contents, ssl certificates, etc.). This operation is not fully supported by "undo" function, so the data recovery is possible only with a help of reserve copy.

### v-delete-web-domain-alias
`{web}` 
*delete web domain alias*

**Options**: `USER` `DOMAIN` `ALIAS` `[RESTART]` 

**Examples**:
```bash
v-delete-web-domain-alias admin example.com www.example.com
```

The function of deleting the alias domain (parked domain). By this call default www aliase can be removed as well.

### v-delete-web-domain-backend
`{web}` 
*deleting web domain backend configuration*

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:
```bash
v-delete-web-domain-backend admin acme.com
```

The function of deleting the virtualhost backend configuration.

### v-delete-web-domain-ftp
`{web}` 
*delete webdomain ftp account*

**Options**: `USER` `DOMAIN` `FTP_USER` 

**Examples**:
```bash
v-delete-web-domain-ftp admin wonderland.com bob_ftp
```

The function deletes additional ftp account.

### v-delete-web-domain-httpauth
`{web}` 
*delete http auth user*

**Options**: `USER` `DOMAIN` `AUTH_USER` `[RESTART]` 

**Examples**:
```bash
v-delete-web-domain-httpauth admin example.com alice
```

The call is used for deleting http auth user

### v-delete-web-domain-proxy
`{web}` 
*deleting web domain proxy configuration*

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:
```bash
v-delete-web-domain-proxy alice lookinglass.com
```

The function of deleting the virtualhost proxy configuration.

### v-delete-web-domain-ssl
`{web}` 
*delete web domain SSL support*

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:
```bash
v-delete-web-domain-ssl admin acme.com
```

The function disable https support and deletes SSL certificates.

### v-delete-web-domain-ssl-force
`{hestia}` `{web}` 
*remove ssl force from domain*

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:
```bash
v-delete-web-domain-ssl-force admin domain.tld
```

The function removes force SSL configurations.

### v-delete-web-domain-ssl-hsts
`{hestia}` 
*remove ssl force from domain*

**Options**: `USER` `DOMAIN` `[RESTART]` 


The function removes force SSL configurations.

### v-delete-web-domain-stats
`{web}` 
*delete web domain statistics*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-delete-web-domain-stats user02 h1.example.com
```

The function of deleting site's system of statistics. Its type is automatically chooses from client's configuration file.

### v-delete-web-domain-stats-user
`{web}` 
*disable webdomain stats  authentication support*

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:
```bash
v-delete-web-domain-stats-user admin acme.com
```

The function removes authentication of statistics system. If the script is called without naming a certain user, all users will be removed. After deleting all of them statistics will be accessible for view without an authentication.

### v-delete-web-domains
`{web}` 
*delete web domains*

**Options**: `USER` `[RESTART]` 

**Examples**:
```bash
v-delete-web-domains admin
```

The function deletes all user's webdomains.

### v-delete-web-php
`{hestia}` 
*delete php fpm version*

**Options**: `VERSION` 


The function checks and delete a fpm php version if not used by any domain.

### v-download-backup
`{hestia}` 
*Download backup*

**Options**: `USER` `BACKUP` 


The function download back-up from remote server

### v-extract-fs-archive

*archive to directory*

**Options**: `USER` `ARCHIVE` `DIRECTORY` `[SELECTED_DIR]` `[STRIP]` `[TEST]` 

**Examples**:
```bash
v-extract-fs-archive admin latest.tar.gz /home/admin
```

The function extracts archive into directory on the file system

### v-generate-api-key
`{panel}` 
*generate api key*

**Options**: – 


The function creates a key file in $HESTIA/data/keys/

### v-generate-password-hash
`{panel}` 
*generate password hash*

**Options**: `HASH_METHOD` `SALT` `PASSWORD` 

**Examples**:
```php
v-generate-password-hash sha-512 rAnDom_string yourPassWord
```

The function generates password hash

### v-generate-ssl-cert
`{panel}` 
*generate self signed certificate and CSR request*

**Options**: `DOMAIN` `EMAIL` `COUNTRY` `STATE` `CITY` `ORG` `UNIT` `[ALIASES]` `[FORMAT]` 

**Examples**:
```bash
v-generate-ssl-cert example.com mail@yahoo.com USA California Monterey ACME.COM IT
```

The function generates self signed SSL certificate and CSR request

### v-get-dns-domain-value
`{dns}` 
*get dns domain value*

**Options**: `USER` `DOMAIN` `KEY` 

**Examples**:
```bash
v-get-dns-domain-value admin example.com SOA
```

The function for getting a certain DNS domain parameter.

### v-get-fs-file-type

*get file type*

**Options**: `USER` `FILE` 

**Examples**:
```bash
v-get-fs-file-type admin index.html
```

The function shows file type

### v-get-mail-account-value
`{mail}` 
*get mail account value*

**Options**: `USER` `DOMAIN` `ACCOUNT` `KEY` 

**Examples**:
```bash
v-get-mail-account-value admin example.tld tester QUOTA
```

The function for getting a certain mail account parameter.

### v-get-mail-domain-value
`{mail}` 
*get mail domain value*

**Options**: `USER` `DOMAIN` `KEY` 

**Examples**:
```bash
v-get-mail-domain-value admin example.com DKIM
```

The function for getting a certain mail domain parameter.

### v-get-sys-timezone
`{panel}` 
*get system timezone*

**Options**: `[FORMAT]` 


The function to get system timezone

### v-get-sys-timezones
`{panel}` 
*list system timezone*

**Options**: `[FORMAT]` 


The function checks system timezone settings

### v-get-user-salt
`{panel}` 
*get user salt*

**Options**: `USER` `[IP]` `[FORMAT]` 

**Examples**:
```bash
v-get-user-salt admin
```

The function provides users salt

### v-get-user-value
`{panel}` 
*get user value*

**Options**: `USER` `KEY` 

**Examples**:
```bash
v-get-user-value admin FNAME
```

The function for obtaining certain user's parameters.

### v-insert-dns-domain

*insert dns domain*

**Options**: `USER` `DATA` `[SRC]` `[FLUSH]` `[RESTART]` 


The function inserts raw record to the dns.conf

### v-insert-dns-record

*insert dns record*

**Options**: `USER` `DOMAIN` `DATA` `[RESTART]` 


The function inserts raw dns record to the domain conf

### v-insert-dns-records

*inserts dns records*

**Options**: `USER` `DOMAIN` `DATA_FILE` `[RESTART]` 


The function copy dns record to the domain conf

### v-list-backup-host
`{panel}` 
*list backup host*

**Options**: `TYPE` `[FORMAT]` 

**Examples**:
```bash
v-list-backup-host local
```

The function for obtaining the list of backup host parameters.

### v-list-cron-job
`{panel}` 
*list cron job*

**Options**: `USER` `JOB` `[FORMAT]` 

**Examples**:
```bash
v-list-cron-job admin 7
```

The function of obtaining cron job parameters.

### v-list-cron-jobs
`{panel}` 
*list user cron jobs*

**Options**: `USER` `[FORMAT]` 

**Examples**:
```bash
v-list-cron-jobs admin
```

The function for obtaining the list of all users cron jobs.

### v-list-database
`{panel}` 
*list database*

**Options**: `USER` `DATABASE` `[FORMAT]` 

**Examples**:
```bash
v-list-database wp_db
```

The function for obtaining of all database's parameters.

### v-list-database-host
`{panel}` 
*list database host*

**Options**: `TYPE` `HOST` `[FORMAT]` 

**Examples**:
```bash
v-list-database-host mysql localhost
```

The function for obtaining database host parameters.

### v-list-database-hosts
`{panel}` 
*list database hosts*

**Options**: `[FORMAT]` 


The function for obtaining the list of all configured database hosts.

### v-list-database-types
`{panel}` 
*list supported database types*

**Options**: `[FORMAT]` 


The function for obtaining the list of database types.

### v-list-databases
`{panel}` 
*listing databases*

**Options**: `USER` `[FORMAT]` 


The function for obtaining the list of all user's databases.

### v-list-dns-domain
`{dns}` 
*list dns domain*

**Options**: `USER` `DOMAIN` `[FORMAT]` 

**Examples**:
```bash
v-list-dns-domain alice wonderland.com
```

The function of obtaining the list of dns domain parameters.

### v-list-dns-domains
`{dns}` 
*list dns domains*

**Options**: `USER` `[FORMAT]` 

**Examples**:
```bash
v-list-dns-domains admin
```

The function for obtaining all DNS domains of a user.

### v-list-dns-records
`{dns}` 
*list dns domain records*

**Options**: `USER` `DOMAIN` `[FORMAT]` 

**Examples**:
```bash
v-list-dns-records admin example.com
```

The function for getting all DNS domain records.

### v-list-dns-template
`{dns}` 
*list dns template*

**Options**: `TEMPLATE` `[FORMAT]` 

**Examples**:
```bash
v-list-dns-template zoho
```

The function for obtaining the DNS template parameters.

### v-list-dns-templates
`{dns}` 
*list dns templates*

**Options**: `[FORMAT]` 


The function for obtaining the list of all DNS templates available.

### v-list-firewall

*list iptables rules*

**Options**: `[FORMAT]` 


The function of obtaining the list of all iptables rules.

### v-list-firewall-ban
`{panel}` 
*list firewall block list*

**Options**: `[FORMAT]` 


The function of obtaining the list of currently blocked ips.

### v-list-firewall-ipset
`{hestia}` 
*List firewall ipset*

**Options**: `[FORMAT]` 


The function prints defined ipset lists

### v-list-firewall-rule
`{panel}` 
*list firewall rule*

**Options**: `RULE` `[FORMAT]` 

**Examples**:
```bash
v-list-firewall-rule 2
```

The function of obtaining firewall rule parameters.

### v-list-fs-directory

*list directory*

**Options**: `USER` `DIRECTORY` 

**Examples**:
```bash
v-list-fs-directory /home/admin/web
```

The function lists directory on the file system

### v-list-letsencrypt-user
`{panel}` 
*list letsencrypt key*

**Options**: `USER` `[FORMAT]` 

**Examples**:
```bash
v-list-letsencrypt-user admin
```

The function for obtaining the letsencrypt key thumbprint

### v-list-mail-account
`{mail}` 
*list mail domain account*

**Options**: `USER` `DOMAIN` `ACCOUNT` `[FORMAT]` 

**Examples**:
```bash
v-list-mail-account admin domain.tld tester
```

The function of obtaining the list of account parameters.

### v-list-mail-account-autoreply
`{mail}` 
*list mail account autoreply*

**Options**: `USER` `DOMAIN` `ACCOUNT` `[FORMAT]` 

**Examples**:
```bash
v-list-mail-account-autoreply admin example.com testing
```

The function of obtaining mail account autoreply message.

### v-list-mail-accounts
`{mail}` 
*list mail domain accounts*

**Options**: `USER` `DOMAIN` `[FORMAT]` 

**Examples**:
```bash
v-list-mail-accounts admin acme.com
```

The function of obtaining the list of all user domains.

### v-list-mail-domain
`{mail}` 
*list mail domain*

**Options**: `USER` `DOMAIN` `[FORMAT]` 

**Examples**:
```bash
v-list-mail-domain user01 mydomain.com
```

The function of obtaining the list of domain parameters.

### v-list-mail-domain-dkim
`{mail}` 
*list mail domain dkim*

**Options**: `USER` `DOMAIN` `[FORMAT]` 

**Examples**:
```bash
v-list-mail-domain-dkim admin maildomain.tld
```

The function of obtaining domain dkim files.

### v-list-mail-domain-dkim-dns
`{mail}` 
*list mail domain dkim dns records*

**Options**: `USER` `DOMAIN` `[FORMAT]` 

**Examples**:
```bash
v-list-mail-domain-dkim-dns admin example.com
```

The function of obtaining domain dkim dns records for proper setup.

### v-list-mail-domain-ssl
`{hestia}` 
*list mail domain ssl certificate*

**Options**: `USER` `DOMAIN` `[FORMAT]` 


The function of obtaining domain ssl files.

### v-list-mail-domains
`{mail}` 
*list mail domains*

**Options**: `USER` `[FORMAT]` 

**Examples**:
```bash
v-list-mail-domains admin
```

The function of obtaining the list of all user domains.

### v-list-remote-dns-hosts

*list remote dns host*

**Options**: `[FORMAT]` 


The function for obtaining the list of remote dns host.

### v-list-sys-clamd-config

*list clamd config parameters*

**Options**: `[FORMAT]` 

**Examples**:
```bash
v-list-sys-clamdconfig
```

The function for obtaining the list of clamd config parameters.

### v-list-sys-config

*list system configuration*

**Options**: `[FORMAT]` 


The function for obtaining the list of system parameters.

### v-list-sys-cpu-status

*list system cpu info*

**Options**: `[FORMAT]` 


The function lists cpu information

### v-list-sys-db-status

*list db status*

**Options**: `[FORMAT]` 


The function lists db server status

### v-list-sys-disk-status

*list disk information*

**Options**: `[FORMAT]` 


The function lists disk information

### v-list-sys-dns-status

*list dns status*

**Options**: `[FORMAT]` 


The function lists dns server status

### v-list-sys-dovecot-config

*list dovecot config parameters*

**Options**: `[FORMAT]` 


The function for obtaining the list of dovecot config parameters.

### v-list-sys-hestia-autoupdate

*list hestia autoupdate settings*

**Options**: `[FORMAT]` 

**Examples**:
```bash
v-list-hestia-autoupdate
```

The function for obtaining autoupdate setings.

### v-list-sys-hestia-ssl

*list hestia ssl certificate*

**Options**: `[FORMAT]` 


The function of obtaining hestia ssl files.

### v-list-sys-hestia-updates

*list system updates*

**Options**: `[FORMAT]` 


The function checks available updates for hestia packages.

### v-list-sys-info

*list system os*

**Options**: `[FORMAT]` 


The function checks available updates for hestia packages.

### v-list-sys-interfaces

*list system interfaces*

**Options**: `[FORMAT]` 


The function for obtaining the list of network interfaces.

### v-list-sys-ip
`{panel}` 
*list system ip*

**Options**: `IP` `[FORMAT]` 

**Examples**:
```bash
v-list-sys-ip 116.203.78.202
```

The function for getting the list of system ip parameters.

### v-list-sys-ips
`{panel}` 
*list system ips*

**Options**: `[FORMAT]` 


The function for obtaining the list of system ip adresses.

### v-list-sys-languages
`{panel}` 
*list system users*

**Options**: `[FORMAT]` 


The function for obtaining the list of system users without detailed information.

### v-list-sys-mail-status
`{mail}` 
*list mail status*

**Options**: `[FORMAT]` 


The function lists mail server status

### v-list-sys-memory-status
`{panel}` 
*list virtual memory info*

**Options**: `[FORMAT]` 


The function lists virtual memory information

### v-list-sys-mysql-config
`{panel}` 
*list mysql config parameters*

**Options**: `[FORMAT]` 

**Examples**:
```bash
v-list-mysql-config
```

The function for obtaining the list of mysql config parameters.

### v-list-sys-network-status

*list system network status*

**Options**: `[FORMAT]` 


The function lists network status

### v-list-sys-nginx-config
`{panel}` 
*list nginx config parameters*

**Options**: `[FORMAT]` 


The function for obtaining the list of nginx config parameters.

### v-list-sys-pgsql-config
`{panel}` 
*list postgresql config parameters*

**Options**: `[FORMAT]` 

**Examples**:
```bash
v-list-pgsql-config
```

The function for obtaining the list of postgresql config parameters.

### v-list-sys-php
`{hestia}` 
*listing availble PHP versions installed*

**Options**: `[FORMAT]` 


List /etc/php/\* version check if folder fpm is avalible

### v-list-sys-php-config
`{panel}` 
*list php config parameters*

**Options**: `[FORMAT]` 


The function for obtaining the list of php config parameters.

### v-list-sys-proftpd-config
`{panel}` 
*list proftpd config parameters*

**Options**: `[FORMAT]` 


The function for obtaining the list of proftpd config parameters.

### v-list-sys-rrd
`{panel}` 
*list system rrd charts*

**Options**: `[FORMAT]` 


List available rrd graphics, its titles and paths.

### v-list-sys-services

*list system services*

**Options**: `[FORMAT]` 


The function for obtaining the list of configured system services.

### v-list-sys-shells

*list system shells*

**Options**: `[FORMAT]` 


The function for obtaining the list of system shells.

### v-list-sys-spamd-config
`{panel}` 
*list spamassassin config parameters*

**Options**: `[FORMAT]` 


The function for obtaining the list of spamassassin config parameters.

### v-list-sys-themes
`{hestia}` 
*list web templates*

**Options**: `[FORMAT]` 


The function for obtaining the list of themes in the theme library and displaying them in the backend or user interface.

### v-list-sys-users
`{panel}` 
*list system users*

**Options**: `[FORMAT]` 


The function for obtaining the list of system users without detailed information.

### v-list-sys-vsftpd-config

*list vsftpd config parameters*

**Options**: `[FORMAT]` 


The function for obtaining the list of vsftpd config parameters.

### v-list-sys-web-status

*list web status*

**Options**: `[FORMAT]` 


The function lists web server status

### v-list-user

*list user parameters*

**Options**: `USER` `[FORMAT]` 

**Examples**:
```bash
v-list-user admin
```

The function to obtain user parameters.

### v-list-user-backup

*list user backup*

**Options**: `USER` `BACKUP` `[FORMAT]` 

**Examples**:
```bash
v-list-user-backups admin admin.2019-05-19_03-31-30.tar
```

The function of obtaining the list of backup parameters. This call, just as all v_list\_\* calls, supports 3 formats - json, shell and plain.

### v-list-user-backup-exclusions

*list backup exclusions*

**Options**: `USER` `[FORMAT]` 

**Examples**:
```bash
v-list-user-backup-exclusions admin
```

The function for obtaining the backup exclusion list

### v-list-user-backups

*list user backups*

**Options**: `USER` `[FORMAT]` 

**Examples**:
```bash
v-list-user-backups admin
```

The function for obtaining the list of available user backups.

### v-list-user-ips

*list user ips*

**Options**: `USER` `[FORMAT]` 

**Examples**:
```bash
v-list-user-ips admin
```

The function for obtaining the list of available ip addresses.

### v-list-user-log

*list user log*

**Options**: `USER` `[FORMAT]` 


The function of obtaining the list of 100 last users commands.

### v-list-user-notifications

*list user notifications*

**Options**: `USER` `[FORMAT]` 

**Examples**:
```bash
v-list-user-notifications admin
```

The function for getting the list notifications

### v-list-user-ns

*list user nameservers*

**Options**: `USER` `[FORMAT]` 

**Examples**:
```bash
v-list-user-ns admin
```

Function for obtaining the list of user's DNS servers.

### v-list-user-package

*list user package*

**Options**: `PACKAGE` `[FORMAT]` 


The function for getting the list of system ip parameters.

### v-list-user-packages

*list user packages*

**Options**: `[FORMAT]` 


The function for obtaining the list of available hosting packages.

### v-list-user-ssh-key
`{hestia}` 
*add ssh key*

**Options**: `USER` `[FORMAT]` 


Lists $user/.ssh/authorized_keys

### v-list-user-stats
`{panel}` 
*list user stats*

**Options**: `USER` `[FORMAT]` 

**Examples**:
```bash
v-list-users-stats admin
```

The function for listing user statistics

### v-list-users
`{panel}` 
*list users*

**Options**: `[FORMAT]` 


The function to obtain the list of all system users.

### v-list-users-stats

*list overall user stats*

**Options**: `[FORMAT]` 


The function for listing overall user statistics

### v-list-web-domain
`{web}` 
*list web domain parameters*

**Options**: `USER` `DOMAIN` `[FORMAT]` 

**Examples**:
```bash
v-list-web-domain admin example.com
```

The function to obtain web domain parameters.

### v-list-web-domain-accesslog
`{web}` 
*list web domain access log*

**Options**: `USER` `DOMAIN` `[LINES]` `[FORMAT]` 

**Examples**:
```bash
v-list-web-domain-accesslog admin example.com
```

The function of obtaining raw access web domain logs.

### v-list-web-domain-errorlog
`{web}` 
*list web domain error log*

**Options**: `USER` `DOMAIN` `[LINES]` `[FORMAT]` 

**Examples**:
```bash
v-list-web-domain-errorlog admin acme.com
```

The function of obtaining raw error web domain logs.

### v-list-web-domain-ssl
`{web}` 
*list web domain ssl certificate*

**Options**: `USER` `DOMAIN` `[FORMAT]` 

**Examples**:
```bash
v-list-web-domain-ssl admin wonderland.com
```

The function of obtaining domain ssl files.

### v-list-web-domains
`{web}` 
*list web domains*

**Options**: `USER` `[FORMAT]` 

**Examples**:
```bash
v-list-web-domains alice
```

The function to obtain the list of all user web domains.

### v-list-web-stats
`{web}` 
*list web statistics*

**Options**: `[FORMAT]` 


The function for obtaining the list of web statistics analyzer.

### v-list-web-templates
`{web}` 
*list web templates*

**Options**: `[FORMAT]` 


The function for obtaining the list of web templates available to a user.

### v-list-web-templates-backend
`{web}` 
*listing backend templates*

**Options**: `[FORMAT]` 


The function for obtaining the list of available backend templates.

### v-list-web-templates-proxy
`{web}` 
*listing proxy templates*

**Options**: `[FORMAT]` 


The function for obtaining the list of proxy templates available to a user.

### v-move-fs-directory

*move file*

**Options**: `USER` `SRC_DIRECTORY` `DST_DIRECTORY` 

**Examples**:
```bash
v-move-fs-directory admin /home/admin/web /home/user02/
```

The function moved file or directory on the file system. This function can also be used to rename files just like normal mv command.

### v-move-fs-file

*move file*

**Options**: `USER` `SRC_FILE` `DST_FILE` 

**Examples**:
```bash
v-move-fs-file admin readme.txt new_readme.txt
```

The function moved file or directory on the file system. This function can also be used to rename files just like normal mv command.

### v-open-fs-config

*open config*

**Options**: `CONFIG` 

**Examples**:
```bash
v-open-fs-config /etc/mysql/my.cnf
```

The function opens/reads config files on the file system

### v-open-fs-file

*open file*

**Options**: `USER` `FILE` 

**Examples**:
```bash
v-open-fs-file admin README.md
```

The function opens/reads files on the file system

### v-rebuild-all
`{hestia}` 
*rebuild all assets for a specified user*

**Options**: `USER` `[RESTART]` 


The function rebuilds all assets for a user account: - Web domains - DNS zones - Mail domains - Databases - Cron Jobs - User account configuration

### v-rebuild-cron-jobs
`{panel}` 
*rebuild cron jobs*

**Options**: `USER` `[RESTART]` 

**Examples**:
```bash
v-rebuild-cron-jobs admin yes
```

The function rebuilds system cron config file for specified user.

### v-rebuild-database
`{hestia}` 
*rebuild databases*

**Options**: `USER` `DATABASE` 


The function for rebuilding a single database for a user

### v-rebuild-databases
`{panel}` 
*rebuild databases*

**Options**: `USER` 

**Examples**:
```bash
v-rebuild-databases admin
```

The function for rebuilding of all databases of a single user.

### v-rebuild-dns-domain
`{dns}` 
*rebuild dns domain*

**Options**: `USER` `DOMAIN` `[RESTART]` `[UPDATE_SERIAL]` 

**Examples**:
```bash
v-rebuild-dns-domain alice wonderland.com
```

The function rebuilds DNS configuration files.

### v-rebuild-dns-domains
`{dns}` 
*rebuild dns domains*

**Options**: `USER` `[RESTART]` `[UPDATE_SERIAL]` 

**Examples**:
```bash
v-rebuild-dns-domains alice
```

The function rebuilds DNS configuration files.

### v-rebuild-mail-domain
`{hestia}` 
*rebuild mail domain*

**Options**: `USER` `DOMAIN` 


The function rebuilds configuration files for a single domain.

### v-rebuild-mail-domains
`{mail}` 
*rebuild mail domains*

**Options**: `USER` 

**Examples**:
```bash
v-rebuild-mail-domains admin
```

The function rebuilds EXIM configuration files for all mail domains.

### v-rebuild-user
`{panel}` 
*rebuild system user*

**Options**: `USER` `[RESTART]` 

**Examples**:
```bash
v-rebuild-user admin yes
```

The function rebuilds system user account.

### v-rebuild-users
`{hestia}` 
*rebuild system user*

**Options**: `[RESTART]` 


The function rebuilds system user accounts.

### v-rebuild-web-domain
`{hestia}` 
*rebuild web domain*

**Options**: `USER` `DOMAIN` `[RESTART]` 


The function rebuilds web configuration files.

### v-rebuild-web-domains

*rebuild web domains*

**Options**: `USER` `[RESTART]` 


The function rebuilds web configuration files.

### v-refresh-sys-theme
`{hestia}` 
*change active system theme*

**Options**: – 


The function for changing the currently active system theme.

### v-rename-package
`{hestia}` 
*change package name*

**Options**: `OLD_NAME` `NEW_NAME` 


The function changes the name of an existing package.

### v-restart-cron
`{panel}` 
*restart cron service*

**Options**: – 


The function tells crond service to reread its configuration files.

### v-restart-dns
`{dns}` 
*restart dns service*

**Options**: – 


The function tells BIND service to reload dns zone files.

### v-restart-ftp
`{panel}` 
*restart ftp service*

**Options**: – 


The function tells ftp server to reread its configuration.

### v-restart-mail
`{mail}` 
*restart mail service*

**Options**: – 


The function tells exim or dovecot services to reload configuration files.

### v-restart-proxy
`{panel}` 
*restart proxy server*

**Options**: – 


The function reloads proxy server configuration.

### v-restart-service
`{panel}` 
*restart service*

**Options**: `SERVICE` `[RESTART]` 


The function restarts system service.

### v-restart-system
`{panel}` 
*restart operating system*

**Options**: `RESTART` `[DELAY]` 

**Examples**:
```bash
v-restart-system yes
```

The function restarts operating system.

### v-restart-web
`{web}` 
*restart web server*

**Options**: – 


The function reloads web server configuration.

### v-restart-web-backend
`{web}` 
*restart backend server*

**Options**: – 


The function reloads backend server configuration.

### v-restore-user
`{panel}` 
*restore user*

**Options**: `USER` `BACKUP` `[WEB]` `[DNS]` `[MAIL]` `[DB]` `[CRON]` `[UDIR]` `[NOTIFY]` 

**Examples**:
```bash
v-restore-user admin 2019-04-22_01-00-00.tar
```

The function for restoring user from backup.

### v-run-cli-cmd
`{hestia}` 
*run cli command*

**Options**: `USER` `CMD` `[ARG...]` 


The function runs a limited list of cli commands with dropped privileges as the specific hestia user

### v-schedule-letsencrypt-domain
`{panel}` 
*adding cronjob for letsencrypt cetificate installation*

**Options**: `USER` `DOMAIN` `[ALIASES]` 

**Examples**:
```bash
v-schedule-letsencrypt-domain admin example.com www.example.com
```

The function adds cronjob for letsencrypt ssl certificate installation

### v-schedule-user-backup
`{panel}` 
*schedule user backup creation*

**Options**: `USER` 

**Examples**:
```bash
v-schedule-user-backup admin
```

The function for scheduling user backup creation.

### v-schedule-user-backup-download
`{hestia}` 
*Schedule a backup*

**Options**: `USER` `BACKUP` 


The function for scheduling user backup creation.

### v-schedule-user-restore
`{panel}` 
*schedule user backup restoration*

**Options**: `USER` `BACKUP` `[WEB]` `[DNS]` `[MAIL]` `[DB]` `[CRON]` `[UDIR]` 

**Examples**:
```bash
v-schedule-user-restore 2019-04-22_01-00-00.tar
```

The function for scheduling user backup restoration.

### v-search-command
`{hestia}` 
*search for available commands*

**Options**: `ARG1` `[ARG...]` 


This function searches for available Hestia Control Panel commands and returns results based on the specified criteria.

### v-search-domain-owner
`{panel}` 
*search domain owner*

**Options**: `DOMAIN` `[TYPE]` 

**Examples**:
```bash
v-search-domain-owner acme.com
```

The function that allows to find user objects.

### v-search-fs-object

*search file or directory*

**Options**: `USER` `OBJECT` `[PATH]` 

**Examples**:
```bash
v-search-fs-object admin hello.txt
```

The function search files and directories on the file system

### v-search-object
`{panel}` 
*search objects*

**Options**: `OBJECT` `[FORMAT]` 

**Examples**:
```bash
v-search-object example.com json
```

The function that allows to find system objects.

### v-search-user-object
`{panel}` 
*search objects*

**Options**: `USER` `OBJECT` `[FORMAT]` 

**Examples**:
```bash
v-search-user-object admin example.com json
```

The function that allows to find user objects.

### v-start-service
`{panel}` 
*start service*

**Options**: `SERVICE` 

**Examples**:
```bash
v-start-service mysql
```

The function starts system service.

### v-stop-firewall
`{panel}` 
*stop system firewall*

**Options**: – 


The function stops iptables

### v-stop-service
`{panel}` 
*stop service*

**Options**: `SERVICE` 

**Examples**:
```bash
v-stop-service apache2
```

The function stops system service.

### v-suspend-cron-job
`{panel}` 
*suspend cron job*

**Options**: `USER` `JOB` `[RESTART]` 

**Examples**:
```bash
v-suspend-cron-job admin 5 yes
```

The function suspends a certain job of the cron scheduler.

### v-suspend-cron-jobs
`{panel}` 
*Suspending sys cron jobs*

**Options**: `USER` `[RESTART]` 

**Examples**:
```bash
v-suspend-cron-jobs admin
```

The function suspends all user cron jobs.

### v-suspend-database
`{panel}` 
*suspend database*

**Options**: `USER` `DATABASE` 

**Examples**:
```bash
v-suspend-database admin admin_wordpress_db
```

The function for suspending a certain user database.

### v-suspend-database-host
`{panel}` 
*suspend database server*

**Options**: `TYPE` `HOST` 

**Examples**:
```bash
v-suspend-database-host mysql localhost
```

The function for suspending a database server.

### v-suspend-databases
`{panel}` 
*suspend databases*

**Options**: `USER` 

**Examples**:
```bash
v-suspend-databases admin
```

The function for suspending of all databases of a single user.

### v-suspend-dns-domain
`{dns}` 
*suspend dns domain*

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:
```bash
v-suspend-dns-domain alice acme.com
```

The function suspends a certain user's domain.

### v-suspend-dns-domains
`{dns}` 
*suspend dns domains*

**Options**: `USER` `[RESTART]` 

**Examples**:
```bash
v-suspend-dns-domain admin yes
```

The function suspends all user's DNS domains.

### v-suspend-dns-record
`{dns}` 
*suspend dns domain record*

**Options**: `USER` `DOMAIN` `ID` `[RESTART]` 

**Examples**:
```bash
v-suspend-dns-record alice wonderland.com 42 yes
```

The function suspends a certain domain record.

### v-suspend-domain
`{panel}` 
*suspend web/dns/mail domain*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-suspend-domain admin example.com
```

The function suspends web/dns/mail domain.

### v-suspend-firewall-rule
`{panel}` 
*suspend firewall rule*

**Options**: `RULE` 

**Examples**:
```bash
v-suspend-firewall-rule 7
```

The function suspends a certain firewall rule.

### v-suspend-mail-account
`{mail}` 
*suspend mail account*

**Options**: `USER` `DOMAIN` `ACCOUNT` 

**Examples**:
```bash
v-suspend-mail-account admin acme.com bob
```

The function suspends mail account.

### v-suspend-mail-accounts
`{mail}` 
*suspend all mail domain accounts*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-suspend-mail-accounts admin example.com
```

The function suspends all mail domain accounts.

### v-suspend-mail-domain
`{mail}` 
*suspend mail domain*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-suspend-mail-domain admin domain.com
```

The function suspends mail domain.

### v-suspend-mail-domains
`{mail}` 
*suspend mail domains*

**Options**: `USER` 

**Examples**:
```bash
v-suspend-mail-domains admin
```

The function suspends all user's MAIL domains.

### v-suspend-remote-dns-host
`{dns}` 
*suspend remote dns server*

**Options**: `HOST` 

**Examples**:
```bash
v-suspend-remote-dns-host hostname.tld
```

The function for suspending remote dns server.

### v-suspend-user
`{panel}` 
*suspend user*

**Options**: `USER` `[RESTART]` 

**Examples**:
```bash
v-suspend-user alice yes
```

The function suspends a certain user and all his objects.

### v-suspend-web-domain
`{web}` 
*suspend web domain*

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:
```bash
v-suspend-web-domain admin example.com yes
```

The function for suspending the site's operation. After blocking it all visitors will be redirected to a web page explaining the reason of suspend. By blocking the site the content of all its directories remains untouched.

### v-suspend-web-domains
`{web}` 
*suspend web domains*

**Options**: `USER` `[RESTART]` 

**Examples**:
```bash
v-suspend-web-domains bob
```

The function of suspending all user's sites.

### v-sync-dns-cluster
`{dns}` 
*synchronize dns domains*

**Options**: `HOST` 


The function synchronize all dns domains.

### v-unsuspend-cron-job
`{panel}` 
*unsuspend cron job*

**Options**: `USER` `JOB` `[RESTART]` 

**Examples**:
```bash
v-unsuspend-cron-job admin 7 yes
```

The function unsuspend certain cron job.

### v-unsuspend-cron-jobs
`{panel}` 
*unsuspend sys cron*

**Options**: `USER` `[RESTART]` 

**Examples**:
```bash
v-unsuspend-cron-jobs admin no
```

The function unsuspends all suspended cron jobs.

### v-unsuspend-database
`{panel}` 
*unsuspend database*

**Options**: `USER` `DATABASE` 

**Examples**:
```bash
v-unsuspend-database admin mydb
```

The function for unsuspending database.

### v-unsuspend-database-host
`{panel}` 
*unsuspend database server*

**Options**: `TYPE` `HOST` 

**Examples**:
```bash
v-unsuspend-database-host mysql localhost
```

The function for unsuspending a database server.

### v-unsuspend-databases
`{panel}` 
*unsuspend databases*

**Options**: `USER` 


The function for unsuspending all user's databases.

### v-unsuspend-dns-domain
`{dns}` 
*unsuspend dns domain*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-unsuspend-dns-domain alice wonderland.com
```

The function unsuspends a certain user's domain.

### v-unsuspend-dns-domains
`{dns}` 
*unsuspend dns domains*

**Options**: `USER` `[RESTART]` 

**Examples**:
```bash
v-unsuspend-dns-domains alice
```

The function unsuspends all user's DNS domains.

### v-unsuspend-dns-record
`{dns}` 
*unsuspend dns domain record*

**Options**: `USER` `DOMAIN` `ID` `[RESTART]` 

**Examples**:
```bash
v-unsuspend-dns-record admin example.com 33
```

The function unsuspends a certain domain record.

### v-unsuspend-domain
`{panel}` 
*unsuspend web/dns/mail domain*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-unsuspend-domain admin acme.com
```

The function unsuspends web/dns/mail domain.

### v-unsuspend-firewall-rule
`{panel}` 
*unsuspend firewall rule*

**Options**: `RULE` 

**Examples**:
```bash
v-unsuspend-firewall-rule 7
```

The function unsuspends a certain firewall rule.

### v-unsuspend-mail-account
`{mail}` 
*unsuspend mail account*

**Options**: `USER` `DOMAIN` `ACCOUNT` 

**Examples**:
```bash
v-suspend-mail-account admin acme.com tester
```

The function unsuspends mail account.

### v-unsuspend-mail-accounts
`{mail}` 
*unsuspend all mail domain accounts*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-unsuspend-mail-accounts admin acme.com
```

The function unsuspends all mail domain accounts.

### v-unsuspend-mail-domain
`{mail}` 
*unsuspend mail domain*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-unsuspend-mail-domain user02 acme.com
```

The function unsuspends mail domain.

### v-unsuspend-mail-domains
`{mail}` 
*unsuspend mail domains*

**Options**: `USER` 

**Examples**:
```bash
v-unsuspend-mail-domains admin
```

The function unsuspends all user's MAIL domains.

### v-unsuspend-remote-dns-host
`{dns}` 
*unsuspend remote dns server*

**Options**: `HOST` 

**Examples**:
```bash
v-unsuspend-remote-dns-host hosname.com
```

The function for unsuspending remote dns server.

### v-unsuspend-user
`{panel}` 
*unsuspend user*

**Options**: `USER` `[RESTART]` 

**Examples**:
```bash
v-unsuspend-user bob
```

The function unsuspends user and all his objects.

### v-unsuspend-web-domain
`{web}` 
*unsuspend web domain*

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:
```bash
v-unsuspend-web-domain admin acme.com
```

The function of unsuspending the domain.

### v-unsuspend-web-domains
`{web}` 
*unsuspend web domains*

**Options**: `USER` `[RESTART]` 

**Examples**:
```bash
v-unsuspend-web-domains admin
```

The function of unsuspending all user's sites.

### v-update-database-disk
`{panel}` 
*update database disk usage*

**Options**: `USER` `DATABASE` 

**Examples**:
```bash
v-update-database-disk admin wp_db
```

The function recalculates disk usage for specific database.

### v-update-databases-disk
`{panel}` 
*update databases disk usage*

**Options**: `USER` 

**Examples**:
```bash
v-update-databases-disk admin
```

The function recalculates disk usage for all user databases.

### v-update-dns-templates
`{dns}` 
*update dns templates*

**Options**: `[RESTART]` 


The function for obtaining updated pack of dns templates.

### v-update-firewall
`{panel}` 
*update system firewall rules*

**Options**: – 


The function updates iptables rules

### v-update-firewall-ipset
`{hestia}` 
*update firewall ipset*

**Options**: `[REFRESH]` 


The function creates ipset lists and updates the lists if they are expired or ondemand

### v-update-host-certificate
`{panel}` 
*update host certificate for hestia*

**Options**: `USER` `HOSTNAME` 

**Examples**:
```bash
v-update-host-certificate admin example.com
```

Function updates certificates for hestia

### v-update-letsencrypt-ssl
`{panel}` 
*update letsencrypt ssl certificates*

**Options**: – 


The function for renew letsencrypt expired ssl certificate for all users

### v-update-mail-domain-disk
`{mail}` 
*update mail domain disk usage*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-update-mail-domain-disk admin example.com
```

The function updates domain disk usage.

### v-update-mail-domains-disk
`{mail}` 
*calculate disk usage for all mail domains*

**Options**: `USER` 

**Examples**:
```bash
v-update-mail-domains-disk admin
```

The function calculates disk usage for all mail domains.

### v-update-mail-templates
`{hestia}` 
*update mail templates*

**Options**: `[RESTART]` 


The function for obtaining updated pack of mail templates.

### v-update-sys-hestia
`{panel}` 
*update hestia package/configs*

**Options**: `PACKAGE` 

**Examples**:
```bash
v-update-sys-hestia exim4
```

The function runs as rpm update trigger. It pulls shell script from hestia server and runs it.

### v-update-sys-hestia-all
`{panel}` 
*update all hestia packages*

**Options**: – 


The function of updating all hestia packages

### v-update-sys-hestia-git
`{hestia}` 
*Delete log file for user*

**Options**: `REPOSITORY` `BRANCH` `INSTALL` `[PACKAGES]` 

**Examples**:
```bash
v-update-sys-hestia-git hestiacp staging/beta install all
# Will download from the hestiacp repository
# Pulls code from staging/beta branch
# install: installs package immediately
# install-auto: installs package and schedules automatic updates from Git
# 'all': (optional) - compiles nginx and php alongside panel.
#                     this option takes a long time, only use when needed
```

Downloads and compiles/installs packages from GitHub repositories

### v-update-sys-ip
`{panel}` 
*update system ip*

**Options**: – 

**Examples**:
```bash
Intended for internal usage
```

The function scans configured ip in the system and register them with hestia internal database. This call is intended for use on vps servers, where ip is set by hypervizor.

### v-update-sys-ip-counters
`{panel}` 
*update IP usage counters*

**Options**: `IP` 


Function updates usage U_WEB_ADOMAINS and U_SYS_USERS counters.

### v-update-sys-queue
`{panel}` 
*update system queue*

**Options**: `PIPE` 


This function is responsible queue processing. Restarts of services, scheduled backups, web log parsing and other heavy resource consuming operations are handled by this script. It helps to optimize system behaviour. In a nutshell Apache will be restarted only once even if 10 domains are added or deleted.

### v-update-sys-rrd
`{panel}` 
*update system rrd charts*

**Options**: – 


The script is wrapper for all rrd functions. It updates all v-update-sys-rrd\_\* at once.

### v-update-sys-rrd-apache2
`{panel}` 
*update apache2 rrd*

**Options**: `PERIOD` 


The function is for updating apache rrd database and graphic.

### v-update-sys-rrd-ftp
`{panel}` 
*update ftp rrd*

**Options**: `PERIOD` 


The function is for updating ftpd rrd database and graphic.

### v-update-sys-rrd-httpd
`{panel}` 
*update httpd rrd*

**Options**: `PERIOD` 


The function is for updating apache rrd database and graphic.

### v-update-sys-rrd-la
`{panel}` 
*update load average rrd*

**Options**: `PERIOD` 


The function is for updating load average rrd database and graphic.

### v-update-sys-rrd-mail
`{panel}` 
*update mail rrd*

**Options**: `PERIOD` 


The function is for updating mail rrd database and graphic.

### v-update-sys-rrd-mem
`{panel}` 
*update memory rrd*

**Options**: `PERIOD` 


The function is for updating memory rrd database and graphic.

### v-update-sys-rrd-mysql
`{panel}` 
*update MySQL rrd*

**Options**: `PERIOD` 


The function is for updating mysql rrd database and graphic.

### v-update-sys-rrd-net
`{panel}` 
*update network rrd*

**Options**: `PERIOD` 


The function is for updating network usage rrd database and graphic.

### v-update-sys-rrd-nginx
`{panel}` 
*update nginx rrd*

**Options**: `PERIOD` 


The function is for updating nginx rrd database and graphic.

### v-update-sys-rrd-pgsql
`{panel}` 
*update PostgreSQL rrd*

**Options**: `PERIOD` 


The function is for updating postgresql rrd database and graphic.

### v-update-sys-rrd-ssh
`{panel}` 
*update ssh rrd*

**Options**: `PERIOD` 


The function is for updating ssh rrd database and graphic.

### v-update-user-backup-exclusions
`{panel}` 
*update backup exclusion list*

**Options**: `USER` `FILE` 

**Examples**:
```bash
v-update-user-backup-exclusions admin .bash_history
```

The function for updating backup exclusion list

### v-update-user-counters
`{panel}` 
*update user usage counters*

**Options**: `USER` 


Function updates usage counters like U_WEB_DOMAINS, U_MAIL_ACCOUNTS, etc.

### v-update-user-disk
`{panel}` 
*update user disk usage*

**Options**: `USER` 

**Examples**:
```bash
v-update-user-disk admin
```

The functions recalculates disk usage and updates database.

### v-update-user-package
`{panel}` 
*update user package*

**Options**: `PACKAGE` 

**Examples**:
```bash
v-update-user-package default
```

The function propagates package to connected users.

### v-update-user-quota
`{panel}` 
*update user disk quota*

**Options**: `USER` 

**Examples**:
```bash
v-update-user-quota alice
```

The functions upates disk quota for specific user

### v-update-user-stats
`{panel}` 
*update user statistics*

**Options**: `USER` 


Function logs user parameters into statistics database.

### v-update-web-domain-disk
`{web}` 
*update disk usage for domain*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-update-web-domain-disk alice wonderland.com
```

The function recalculates disk usage for specific webdomain.

### v-update-web-domain-ssl
`{web}` 
*updating ssl certificate for domain*

**Options**: `USER` `DOMAIN` `SSL_DIR` `[RESTART]` 

**Examples**:
```bash
v-update-web-domain-ssl admin domain.com /home/admin/tmp
```

The function updates the SSL certificate for a domain. Parameter ssl_dir is a path to directory where 2 or 3 ssl files can be found. Certificate file domain.tld.crt and its key domain.tld.key are mandatory. Certificate authority domain.tld.ca file is optional.

### v-update-web-domain-stat
`{web}` 
*update domain statistics*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-update-web-domain-stat alice acme.com
```

The function runs log analyzer for specific webdomain.

### v-update-web-domain-traff
`{web}` 
*update domain bandwidth usage*

**Options**: `USER` `DOMAIN` 

**Examples**:
```bash
v-update-web-domain-traff admin example.com
```

The function recalculates bandwidth usage for specific domain.

### v-update-web-domains-disk
`{web}` 
*update domains disk usage*

**Options**: `USER` 

**Examples**:
```bash
v-update-web-domains-disk alice
```

The function recalculates disk usage for all user webdomains.

### v-update-web-domains-stat
`{web}` 
*update domains statistics*

**Options**: `USER` 

**Examples**:
```bash
v-update-web-domains-stat admin
```

The function runs log analyzer usage for all user webdomains.

### v-update-web-domains-traff
`{web}` 
*update domains bandwidth usage*

**Options**: `USER` 

**Examples**:
```bash
v-update-web-domains-traff bob
```

The function recalculates bandwidth usage for all user webdomains.

### v-update-web-templates
`{web}` 
*update web templates*

**Options**: `[RESTART]` 


The function for obtaining updated pack of web templates.

